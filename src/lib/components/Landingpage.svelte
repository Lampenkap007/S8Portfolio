<div class="landingpage">
	<div class="landingpageHero">
		<h1>Welcome to my portfolio!</h1>
		<p>
			My name is Jordi, and on this page, you’ll find anything about my graduation internship at TDE
			and the project I’ve been working on.
			<br /><br />
			My project is all about Formula 1! With RacingNews365, the fastest growing F1 news website in Europe,
			I have developed a brand new liveblog experience for both RacingNews365 and the liveblog users
			at home.
		</p>
		<a target="_blank" class="button" href="/docs/portfolioreadingguide.pdf">
			<p class="readingGuide">Portfolio Reading Guide</p>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="20"
				height="20"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-external-link"
				><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline
					points="15 3 21 3 21 9"
				/><line x1="10" y1="14" x2="21" y2="3" /></svg
			></a
		>
	</div>
	<img class="fotovanmijnhoofd" src="/img/fotovanmijnhoofd.png" alt="Foto van mijn hoofd." />
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat&display=swap');

	.landingpage {
		font-family: 'Comfortaa', cursive;
		font-size: larger;
		width: 100%;
		height: 90vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.landingpageHero {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		max-width: 40rem;
		line-height: 28px;
	}

	.fotovanmijnhoofd {
		border-radius: 100%;
		height: 30rem;
		width: 30rem;
	}

	.button {
		background: #54baf3;
		text-decoration: none;
		color: #fff;
		border: none;
		padding: 20px;
		margin-top: 12px;
		border-radius: 15px;
		cursor: pointer;
		font-size: 14px;
		font-weight: bold;
		transition: background 0.3s ease;
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.readingGuide {
		margin-bottom: -2px;
	}

	.button:hover {
		background: #397da5;
	}

	@media only screen and (max-width: 1200px) {
		.landingpage {
			font-size: small;
			flex-direction: column;
		}
	}
</style>
