const EventSource = require("eventsource");
const zlib = require("zlib");
const express = require("express");
const app = express();
const EventEmitter = require("events");
class SSEEmitter extends EventEmitter {}
const sseEmitter = new SSEEmitter();

let previousPositionData = null;
let positionData;
let trackStatus;
let previousTrackStatus = null;
const previousPositions = {};
const stationaryCount = {};
const alreadyLogged = {};
let driverList = {};
let timingData = {};
let alreadyLoggedIsOutDrivers = {};
let UtcTime;
let currentLap;
let previousPitStatus = {};
let fastestLap = {
  driverId: null,
  lapTimeSeconds: Number.MAX_SAFE_INTEGER,
};

app.get("/events", function (req, res) {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.flushHeaders();

  const onEvent = (data) => {
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  sseEmitter.on("message", onEvent);

  req.on("close", () => {
    console.log("Client disconnected");
    sseEmitter.removeListener("message", onEvent);
  });
});

const PORT = 1234;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

function isSamePosition(pos1, pos2) {
  // Round the positions to the nearest 10
  const roundedX1 = Math.round(pos1.X / 25) * 25;
  const roundedY1 = Math.round(pos1.Y / 25) * 25;
  const roundedZ1 = Math.round(pos1.Z / 25) * 25;

  const roundedX2 = Math.round(pos2.X / 25) * 25;
  const roundedY2 = Math.round(pos2.Y / 25) * 25;
  const roundedZ2 = Math.round(pos2.Z / 25) * 25;

  return (
    roundedX1 === roundedX2 &&
    roundedY1 === roundedY2 &&
    roundedZ1 === roundedZ2
  );
}

function logStationary(driverNumber, driverFullName) {
  sseEmitter.emit("message", {
    event: "CrashDetection",
    data: {
      time: UtcTime,
      lap: currentLap,
      status: trackStatus,
      driver: driverFullName,
      location: positionData.Position[0].Entries[driverNumber],
    },
  });

  console.log(
    `${UtcTime} In lap ${currentLap}, ${driverFullName} has been stationary for 3 seconds.`
  );
}

// function convertLapTimeToSeconds(lapTime) {
//   const parts = lapTime.split(":");
//   const minutes = parseInt(parts[0], 10);
//   const seconds = parseFloat(parts[1]);
//   return minutes * 60 + seconds;
// }

// function updateFastestLap(timingDataF1, driverList) {
//   Object.keys(timingDataF1.Lines).forEach((driverId) => {
//     const driverData = timingDataF1.Lines[driverId];
//     const bestLapTimeValue = driverData.BestLapTime.Value;
//     const lapTimeInSeconds = convertLapTimeToSeconds(bestLapTimeValue);

//     if (lapTimeInSeconds < fastestLap.lapTimeSeconds) {
//       fastestLap = {
//         driverId: driverId,
//         lapTimeSeconds: lapTimeInSeconds,
//       };

//       const driverName = driverList[driverId].FullName;
//       console.log(`New fastest lap by ${driverName}: ${bestLapTimeValue}`);
//     }
//   });
// }

function logTyreChange(timingDataF1, currentTyres, driverList) {
  Object.keys(timingDataF1.Lines).forEach((driverId) => {
    const driver = timingDataF1.Lines[driverId];
    const isInPit = driver.InPit;
    const hasPitStatusChanged = previousPitStatus[driverId] !== isInPit;
    previousPitStatus[driverId] = isInPit;

    if (hasPitStatusChanged && driverList[driverId]) {
      const driverName = driverList[driverId].FullName;

      if (isInPit) {
        // The driver has just entered the pit
        if (currentTyres.Tyres[driverId]) {
          const oldTyreCompound = currentTyres.Tyres[driverId].Compound;
          sseEmitter.emit("message", {
            event: "PitlaneEntry",
            data: {
              time: UtcTime,
              lap: currentLap,
              status: trackStatus,
              driver: driverName,
              location: positionData.Position[0].Entries[driverId],
              compound: oldTyreCompound,
            },
          });
          console.log(
            `${UtcTime} In lap ${currentLap}, ${driverName} entered the pit with ${oldTyreCompound} tyres.`
          );
        }
      } else {
        // The driver has just exited the pit
        if (currentTyres.Tyres[driverId]) {
          const newTyreCompound = currentTyres.Tyres[driverId].Compound;
          sseEmitter.emit("message", {
            event: "PitlaneExit",
            data: {
              time: UtcTime,
              lap: currentLap,
              status: trackStatus,
              driver: driverName,
              location: positionData.Position[0].Entries[driverId],
              compound: newTyreCompound,
            },
          });
          console.log(
            `${UtcTime} In lap ${currentLap}, ${driverName} exited the pit with ${newTyreCompound} tyres.`
          );
        }
      }
    }
  });
}

function checkForStationaryCars(carData) {
  Object.keys(carData).forEach((driverNumber) => {
    const currentPosition = carData[driverNumber];
    const driverTiming = timingData.Lines[driverNumber];

    if (driverTiming && (driverTiming.Stopped || driverTiming.InPit)) return;

    if (!previousPositions[driverNumber]) {
      previousPositions[driverNumber] = currentPosition;
      stationaryCount[driverNumber] = 0;
      alreadyLogged[driverNumber] = false;
      return;
    }

    if (isSamePosition(previousPositions[driverNumber], currentPosition)) {
      stationaryCount[driverNumber]++;
    } else {
      stationaryCount[driverNumber] = 0;
      alreadyLogged[driverNumber] = false;
    }

    if (stationaryCount[driverNumber] === 3 && !alreadyLogged[driverNumber]) {
      if (driverList[driverNumber])
        logStationary(driverNumber, driverList[driverNumber].FullName);
      alreadyLogged[driverNumber] = true;
    }

    previousPositions[driverNumber] = currentPosition;
  });
}

function detectPositionChanges(newData, driverRaceInfo) {
  if (previousPositionData) {
    Object.keys(newData).forEach((driverId) => {
      const currentDriver = newData[driverId];
      const previousDriver = previousPositionData[driverId];

      // Check and log if a driver enters or exits the pit lane
      if (currentDriver && previousDriver) {
        if (currentDriver.InPit && !previousDriver.InPit) {
          const enteringDriverName = driverList[driverId]
            ? driverList[driverId].FullName
            : "Unknown Driver";
          // console.log(
          //   `${UtcTime} In lap ${currentLap}, ${enteringDriverName} has entered the pit lane.`
          // );
        } else if (!currentDriver.InPit && previousDriver.InPit) {
          const exitingDriverName = driverList[driverId]
            ? driverList[driverId].FullName
            : "Unknown Driver";
          // console.log(
          //   // `${UtcTime} In lap ${currentLap}, ${exitingDriverName} has exited the pit lane at position ${currentDriver.Position}.` // CurrentDriver.Position takes position on pitlane entry, not pitlane exit for some reason.
          //   `${UtcTime} In lap ${currentLap}, ${exitingDriverName} has exited the pit lane.`
          // );
        }

        // Check if the driver has gained a position and is not in the pit lane
        if (
          currentDriver.Position < previousDriver.Position &&
          !currentDriver.InPit
        ) {
          const overtakingDriverName = driverList[driverId]
            ? driverList[driverId].FullName
            : "Unknown Driver";

          // Find out who was overtaken
          const overtakenDriverId = Object.keys(previousPositionData).find(
            (id) =>
              previousPositionData[id].Position === currentDriver.Position &&
              id !== driverId
          );

          // Check if the overtaken driver is also not in the pit lane
          if (
            overtakenDriverId &&
            driverRaceInfo[overtakenDriverId] &&
            !driverRaceInfo[overtakenDriverId].IsOut &&
            !previousPositionData[overtakenDriverId].InPit
          ) {
            const overtakenDriverName = driverList[overtakenDriverId]
              ? driverList[overtakenDriverId].FullName
              : "Unknown Driver";

            console.log(
              `${UtcTime} In lap ${currentLap}, ${overtakingDriverName} moved up to position ${currentDriver.Position}, overtaking ${overtakenDriverName}.`
            );
            sseEmitter.emit("message", {
              event: "Overtake",
              data: {
                time: UtcTime,
                lap: currentLap,
                status: trackStatus,
                overtakingDriver: overtakingDriverName,
                overtakenDriver: overtakenDriverName,
                overtakingDriverPosition: currentDriver.Position,
                location: positionData.Position[0].Entries[driverId],
              },
            });
          }
        }
      }
    });
  }

  previousPositionData = newData;
}

function checkTrackStatusChange(trackStatus) {
  // Assuming 'trackStatus' is your live variable that updates every second
  if (trackStatus !== previousTrackStatus) {
    console.log(
      `${UtcTime} In lap ${currentLap}, Track status changed: ${trackStatus}`
    );
    sseEmitter.emit("message", {
      event: "TrackstatusUpdate",
      data: {
        time: UtcTime,
        lap: currentLap,
        status: trackStatus,
      },
    });
    previousTrackStatus = trackStatus;
  }
}

function decryptPositionData(encodedString) {
  const decoded = Buffer.from(encodedString, "base64");
  zlib.inflateRaw(decoded, (err, buffer) => {
    if (err) {
      console.error("Failed to decompress:", err);
      return;
    }
    const decodedPositions = JSON.parse(buffer.toString());
    positionData = decodedPositions;
    checkForStationaryCars(decodedPositions.Position[0].Entries);
  });
}

function detectOutDrivers(DriverRaceInfo) {
  Object.keys(DriverRaceInfo).forEach((driverNumber) => {
    const driverInfo = DriverRaceInfo[driverNumber];

    // Check if the driver is marked as 'IsOut' and the driver is known in the driverList
    if (driverInfo.IsOut && driverList[driverNumber]) {
      if (!alreadyLoggedIsOutDrivers[driverNumber]) {
        const driverFullName = driverList[driverNumber].FullName;
        console.log(
          `${UtcTime} In lap ${currentLap}, ${driverFullName} is out.`
        );
        sseEmitter.emit("message", {
          event: "DriverOut",
          data: {
            driver: driverFullName,
            time: UtcTime,
            lap: currentLap,
            status: trackStatus,
          },
        });
        alreadyLoggedIsOutDrivers[driverNumber] = true;
      }
    } else if (alreadyLoggedIsOutDrivers[driverNumber]) {
      // Reset the flag if the driver is no longer stopped
      alreadyLoggedIsOutDrivers[driverNumber] = false;
    }
  });
}

const eventSource = new EventSource("http://localhost:3000/events");
let sessionStarted = false;

eventSource.onmessage = function (event) {
  try {
    const jsonData = JSON.parse(event.data);
    UtcTime = jsonData.R.ExtrapolatedClock.Utc;
    driverList = jsonData.R.DriverList;
    trackStatus = jsonData.R.TrackStatus.Message;
    timingData = jsonData.R.TimingDataF1;
    currentLap =
      jsonData.R.SessionData.Series[jsonData.R.SessionData.Series.length - 1]
        .Lap;

    if (jsonData.R.SessionStatus.Status === "Started" && !sessionStarted) {
      console.log(`${UtcTime} In lap ${currentLap}, Session started`);
      sseEmitter.emit("message", {
        event: "SessionStatus",
        data: {
          time: UtcTime,
          sessionStarted: true,
        },
      });
      sessionStarted = true;
    }

    if (sessionStarted) {
      detectPositionChanges(
        jsonData.R.TimingDataF1.Lines,
        jsonData.R.DriverRaceInfo
      );
      checkTrackStatusChange(jsonData.R.TrackStatus.Message);
      decryptPositionData(jsonData.R["Position.z"]);
      detectOutDrivers(jsonData.R.DriverRaceInfo);
      logTyreChange(
        jsonData.R.TimingDataF1,
        jsonData.R.CurrentTyres,
        driverList
      );
      // updateFastestLap(timingDataF1, driverList);
    }
  } catch (e) {}
};
