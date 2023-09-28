<script>
	import { page } from '$app/stores';
	import Navbar from '$lib/components/Navbar.svelte';
	import data from '../../../lib/assets/data/deliverables.json';

	const deliverable = $page.params.deliverable;
	console.log(deliverable);
	// @ts-ignore
	console.log(data[deliverable]);
</script>

<Navbar />

<div class="contentBlock">
	<div class="banner" />
	<div class="contentBlockDevider">
		<div class="contentBlockLeft">
			<h1 class="contentTitle">{data[deliverable].name}</h1>
			<a class="documentLink" href="http://" target="_blank" rel="noopener noreferrer"
				>Document.pdf</a
			>
			<div class="deliverableDetails">
				<ul class="deliverableDetailList">
					<li class="deliverableDetailListItem">
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
							class="feather feather-calendar icon"
							><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line
								x1="16"
								y1="2"
								x2="16"
								y2="6"
							/><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg
						>
						Deskresearch
					</li>
					<li class="deliverableDetailListItem">
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
							class="feather feather-search icon"
							><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
						>
						Deskresearch
					</li>
					<li class="deliverableDetailListItem">
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
							class="feather feather-clock icon"
							><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
						>
						Deskresearch
					</li>
				</ul>
			</div>
		</div>
		<div class="contentBlockRight">
			<h2 class="summaryTitle">Summary</h2>
			<div class="summary">{data[deliverable].summary}</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat&display=swap');

	.contentBlock {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 20rem;
		padding-top: 10rem;
	}
	.banner {
		width: 100%;
		height: 10rem;
		background-image: url('https://images.pexels.com/photos/15591206/pexels-photo-15591206/free-photo-of-under.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 20px;
		margin-bottom: 5rem;
	}
	.contentBlockDevider {
		display: flex;
		width: 100%;
	}
	.contentBlockLeft {
		width: 50%;
		font-family: 'Comfortaa';
	}
	.contentBlockRight {
		width: 50%;
	}
	.contentTitle {
		font-size: 46px;
		padding-bottom: 3rem;
	}
	.documentLink {
		color: white;
		font-family: 'Comfortaa';
		background-color: blue;
		padding: 1rem;
		border-radius: 500px;
	}
	.deliverableDetails {
		margin-top: 3rem;
		padding: 20px;
		padding-bottom: 10px;
		width: fit-content;
		border-radius: 20px;
		background-color: lightgray;
	}
	.deliverableDetailList {
		list-style: none;
	}
	.icon {
		padding: 10px;
		margin-right: 10px;
		background-color: white;
		border-radius: 100%;
	}
	.deliverableDetailListItem {
		padding-bottom: 10px;
		display: flex;
		align-items: center;
	}
	.summaryTitle {
		font-family: 'Comfortaa';
		padding-bottom: 2rem;
	}
	.summary {
		font-family: 'Montserrat';
		line-height: 24px;
		font-size: 18px;
	}
</style>
