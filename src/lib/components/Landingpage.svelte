<script>
	import InternShipManager from './InternShipManager.svelte';
</script>

<div class="landingpage">
	<div class="landingpageHero">
		<h1>S8 Graduation</h1>
		<h2>Improving the Grand Prix experience <br /> for F1 viewers at home</h2>
		<h3>By Jordi Franssen</h3>
	</div>
	<InternShipManager />
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

	h1 {
		color: #ff6651;
	}

	.landingpageHero {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	@media only screen and (max-width: 1200px) {
		.landingpage {
			font-size: small;
			flex-direction: column;
		}
	}
</style>
