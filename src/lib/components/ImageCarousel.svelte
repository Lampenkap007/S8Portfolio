<script>
	import data from '../assets/data/deliverables.json';
	import { page } from '$app/stores';

	let currentIndex = 0;

	const deliverable = $page.params.deliverable;
	let images = data[deliverable].images;

	function showNext() {
		currentIndex = (currentIndex + 1) % images.length;
	}

	function showPrevious() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	}
</script>

<div class="carousel">
	{#if images.length > 0}
		<button class="carouselButtonLeft carouselButton" on:click={showPrevious}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-chevron-left"><polyline points="15 18 9 12 15 6" /></svg
			></button
		>
		<button class="carouselButtonRight carouselButton" on:click={showNext}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#000"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6" /></svg
			></button
		>
		<img class="carouselImg" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
	{/if}
</div>

<style>
	.carousel {
		padding-top: 2rem;
		position: relative;
		width: 100%;
		display: flex;
		align-items: center;
		border-radius: 20px;
	}
	.carouselImg {
		border-radius: 20px;
		width: 100%;
	}
	.carouselButton {
		background-color: white;
		color: inherit;
		border: none;
		padding: 12px;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.carouselButtonLeft {
		position: absolute;
		left: 0px;
		border-radius: 0px 50px 50px 0px;
	}
	.carouselButtonRight {
		position: absolute;
		right: 0px;
		border-radius: 50px 0px 0px 50px;
	}
</style>
