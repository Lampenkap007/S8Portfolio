<script>
	import { page } from '$app/stores';
	import data from '../../../lib/assets/data/deliverables.json';

	const deliverable = $page.params.deliverable;
	console.log(deliverable);
	// @ts-ignore
	const deliverableName = data[deliverable].name;
</script>

<div class="landingpage">
	<div class="landingpageHero">
		<h1>{deliverableName}</h1>
		<h2>Improving the Grand Prix experience <br /> for F1 viewers at home</h2>
		<h3>By Jordi Franssen</h3>
	</div>
	<div class="langdingpage3D">
		<iframe
			title="3DFrame"
			class="threeCanvas"
			src="https://650193ebceeaf66e90e0bf46--glittery-raindrop-946462.netlify.app/"
			frameborder="0"
		/>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat&display=swap');

	.landingpage {
		font-family: 'Comfortaa', cursive;
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	h1 {
		font-size: 4rem;
		color: #ff6651;
	}

	.landingpageHero {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.threeCanvas {
		height: 50vh;
		width: 40vw;
	}
</style>
