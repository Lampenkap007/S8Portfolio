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

	@media only screen and (max-width: 1200px) {
		.landingpage {
			font-size: small;
			flex-direction: column;
		}
	}
</style>
