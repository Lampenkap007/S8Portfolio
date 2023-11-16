<script>
	import { page } from '$app/stores';
	// import Navbar from '$lib/components/Navbar.svelte';
	import data from '../../../lib/assets/data/deliverables.json';
	import ImageCarousel from '../../../lib/components/ImageCarousel.svelte';

	const pageContent = data[$page.params.deliverable];
	function goBack() {
		window.history.back();
	}
</script>

<!-- <Navbar /> -->
<div class="contentPage">
	<div class="contentBlock">
		<div class="banner" style="background-image: url({pageContent.imageUrl});">
			<span class="imageCaption">
				{'An image about "' + pageContent.name + '" according to artificial intelligence (DALL-E)'}
			</span>
		</div>
		<button class="documentLink nobuttonstyle" on:click={goBack}>
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"
				><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" /></svg
			><span>Home</span>
		</button>
		<div class="contentBlockDevider">
			<div class="contentBlockLeft">
				<div class="deliverableDetails">
					<ul class="deliverableDetailList">
						<li class="deliverableDetailListItem">
							<svg
								class="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="20"
								viewBox="0 -960 960 960"
								width="20"
								><path
									d="M320-240h320v-80H320v80Zm0-160h320v-80H320v80ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"
								/></svg
							>
							<a href={pageContent.documentUrl} class="documentLink" target="_blank"
								>Full documentation</a
							>
						</li>
						<li class="deliverableDetailListItem">
							<svg
								class="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								><path
									d="M360-300q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"
								/></svg
							>
							{pageContent.date}
						</li>
						<li class="deliverableDetailListItem">
							<svg
								class="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								><path
									d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Zm0-80h560L520-492v-268h-80v268L200-200Zm280-280Z"
								/></svg
							>
							{pageContent.research}
						</li>
						<li class="deliverableDetailListItem">
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
								class="icon feather feather-search"
								><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg
							>
							{#if pageContent.IctReasearchMethod.Url != false}
								<a
									class="IctReasearchMethod"
									target="_blank"
									href={pageContent.IctReasearchMethod.Url}
									>{pageContent.IctReasearchMethod.Label}</a
								>
							{:else}
								<p>Not applicable</p>
							{/if}
						</li>
						<li class="deliverableDetailListItem">
							<svg
								class="icon"
								xmlns="http://www.w3.org/2000/svg"
								height="24"
								viewBox="0 -960 960 960"
								width="24"
								><path
									d="m520-384 56-56-96-96v-184h-80v216l120 120ZM368-249q16-48 56.5-79.5T518-360h152q24-34 37-74.5t13-85.5q0-117-81.5-198.5T440-800q-117 0-198.5 81.5T160-520q0 98 58.5 172.5T368-249ZM520-40q-58 0-102-36.5T363-168q-122-26-202.5-124T80-520q0-150 105-255t255-105q150 0 255 105t105 255q0 43-9.5 83.5T763-360q66 0 111.5 47T920-200q0 66-47 113T760-40H520Zm-80-485Zm200 325Zm-120 80h240q33 0 56.5-23.5T840-200q0-33-23.5-56.5T760-280H520q-33 0-56.5 23.5T440-200q0 33 23.5 56.5T520-120Zm0-40q-17 0-28.5-11.5T480-200q0-17 11.5-28.5T520-240q17 0 28.5 11.5T560-200q0 17-11.5 28.5T520-160Zm120 0q-17 0-28.5-11.5T600-200q0-17 11.5-28.5T640-240q17 0 28.5 11.5T680-200q0 17-11.5 28.5T640-160Zm120 0q-17 0-28.5-11.5T720-200q0-17 11.5-28.5T760-240q17 0 28.5 11.5T800-200q0 17-11.5 28.5T760-160Z"
								/></svg
							>
							{pageContent.phase}
						</li>
					</ul>
				</div>
				<ImageCarousel />
			</div>
			<div class="contentBlockRight">
				<h1 class="contentTitle">{pageContent.name}</h1>

				<h2 class="summaryTitle">Summary</h2>
				<div class="summary">{@html pageContent.summary}</div>
				<h2 class="summaryTitle">Learning Outcome Clarification</h2>
				<div class="learningOutcomeClarification">
					<ul class="LearningOutcomeList">
						{#if pageContent.learningOutcomes.includes(1)}
							<li class="tooltip">
								Learning Outcome 1: Professional Duties <span class="tooltiptext"
									>You carry out the professional duties on a bachelor level resulting in
									professional products in line with the IT-area you are working in.
								</span>
							</li>
						{/if}
						{#if pageContent.learningOutcomes.includes(2)}
							<li class="tooltip">
								Learning Outcome 2: Situation-Orientation
								<span class="tooltiptext"
									>You apply your previously acquired knowledge and skills in a new and authentic
									context to deliver relevant and valuable results for the project and company.
								</span>
							</li>
						{/if}
						{#if pageContent.learningOutcomes.includes(3)}
							<li class="tooltip">
								Learning Outcome 3: Future-Oriented Organisation
								<span class="tooltiptext"
									>You explore the organisational context of your project, make business,
									sustainable and ethical considerations and manage all aspects of the execution of
									the project.
								</span>
							</li>
						{/if}
						{#if pageContent.learningOutcomes.includes(4)}
							<li class="tooltip">
								Learning Outcome 4: Investigative Problem Solving
								<span class="tooltiptext"
									>You take a critical look at your project from different perspectives, identify
									problems, find an effective approach for solving them and arrive at appropriate
									solutions.
								</span>
							</li>
						{/if}
						{#if pageContent.learningOutcomes.includes(5)}
							<li class="tooltip">
								Learning Outcome 5: Personal Leadership
								<span class="tooltiptext"
									>You show an entrepreneurial attitude in both your project and personal
									development, you pay attention to your own learning ability and keep in mind what
									kind of IT professional and/or what type of positions you aspire to.
								</span>
							</li>
						{/if}
						{#if pageContent.learningOutcomes.includes(6)}
							<li class="tooltip">
								Learning Outcome 6: Targeted Interaction
								<span class="tooltiptext"
									>You determine which partners play a role in your project, collaborate
									constructively with them and communicate appropriately to achieve the desired
									impact.
								</span>
							</li>
						{/if}
					</ul>
					<p class="summary">
						{@html pageContent.LearningOutcomeClarification}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&family=Montserrat&display=swap');

	.nobuttonstyle {
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		cursor: pointer;
		outline: inherit;
	}
	.learningOutcomeClarification {
	}
	.IctReasearchMethod {
		color: black;
	}

	.imageCaption {
		padding: 5px;
		background-color: white;
		border-radius: 5px;
		margin: 0.5rem;
		box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.2);
	}

	.LearningOutcomeList {
		padding-bottom: 2rem;
		padding-left: 1rem;
		font-family: 'Montserrat';
		line-height: 24px;
		font-size: 18px;
	}
	.contentPage {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.contentBlock {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding: 20rem;
		padding-top: 5rem;
		max-width: 100rem;
	}
	.banner {
		width: 100%;
		height: 15rem;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 20px;
		font-family: 'Montserrat';
		margin-bottom: 1rem;
		display: flex;
		align-items: end;
		justify-content: center;
	}
	.contentBlockDevider {
		display: flex;
		margin-top: 2rem;
		width: 100%;
		gap: 3rem;
	}
	.contentBlockLeft {
		width: 40%;
		font-family: 'Comfortaa';
	}
	.contentBlockRight {
		width: 60%;
	}
	.contentTitle {
		font-size: 32px;
		padding-bottom: 2rem;
		font-family: 'Comfortaa';
	}
	.documentLink {
		color: black;
		font-family: 'Comfortaa';
		width: fit-content;
		display: flex;
		align-items: center;
		gap: 5px;
		text-decoration: underline;
		cursor: pointer;
	}
	.deliverableDetails {
		border-radius: 20px;
		padding: 8px;
		background-color: #f2f2f2;
	}
	.deliverableDetailList {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 20px;
	}
	.icon {
		padding: 10px;
		margin-right: 10px;
		background-color: white;
		border-radius: 100%;
	}
	.deliverableDetailListItem {
		display: flex;
		align-items: center;
	}
	.summaryTitle {
		font-family: 'Comfortaa';
		padding-bottom: 2rem;
	}
	.learningOutcomes {
	}
	.learningOutcomesModifier {
		align-items: start;
	}
	.summary {
		font-family: 'Montserrat';
		line-height: 24px;
		font-size: 18px;
		padding-bottom: 2rem;
	}

	.tooltip {
		padding-top: 15px;
		position: relative;
		width: fit-content;
		border-bottom: 1px solid black;
	}

	.tooltip .tooltiptext {
		visibility: hidden;
		background-color: black;
		z-index: 1;
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px;
		position: absolute;
		top: 150%;
		left: 50%;
		margin-left: -60px;
	}

	.tooltip .tooltiptext::after {
		content: '';
		position: absolute;
		bottom: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: transparent transparent black transparent;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
	}

	@media only screen and (max-width: 1200px) {
		.contentBlockDevider {
			flex-direction: column;
		}
		.summary,
		.contentBlockLeft,
		.contentBlockRight,
		.deliverableDetails {
			width: 100%;
		}
	}
</style>
