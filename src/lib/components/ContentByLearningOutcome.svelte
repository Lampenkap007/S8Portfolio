<script>
	import data from '../assets/data/contentByLearningOutcome.json';
</script>

<div class="projectContentByLearningOutcome">
	<ul class="cards">
		{#each data as card}
			<li class="card" style="color: {card.accentColor};">
				<div>
					<h2 class="cardTitle">{card.title}</h2>
					<span class="cardIntro">{card.introduction}</span>
				</div>

				<ul class="deliverableList">
					{#each card.deliverables as deliverable, i}
						<li class="deliverableItem">
							<div class="deliverableIndex" style="color: {card.accentColor};">{i + 1}</div>
							<a class="deliverableItemLabel" href={deliverable.url} target="_self"
								>{deliverable.label}</a
							>
						</li>
					{/each}
				</ul>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.projectContentByLearningOutcome {
		visibility: hidden;
		position: absolute;
		width: 100%;
		display: flex;
		justify-content: center;
	}
	.cards {
		list-style: none;
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		height: fit-content;
		gap: 2rem;
		width: 65rem;
		padding-top: 5rem;
		padding-bottom: 5rem;
	}
	.card {
		display: flex;
		flex-direction: column;
		font-family: 'Comfortaa', cursive;
		box-shadow: 10px 10px 36px 15px rgba(0, 0, 0, 0.05);
		width: 25rem;
		padding: 3rem;
		border-radius: 2rem;
	}
	.cardTitle {
		margin-bottom: 1rem;
	}
	.cardIntro {
		color: black;
		margin-top: 1rem;
		font-family: 'Montserrat', sans-serif;
	}
	.deliverableList {
		margin-top: 1rem;
		font-family: 'Montserrat', sans-serif;
		color: black;
		list-style: none;
	}
	.deliverableIndex {
		font-family: 'Comfortaa', cursive;
		width: 20px;
	}
	.deliverableItem {
		display: flex;
		padding-top: 1rem;
		padding-bottom: 5px;
		border-bottom: 1px solid lightgray;
	}
	.deliverableItemLabel {
		text-decoration: none;
		color: black;
		margin-top: -1px;
	}
	.deliverableItemLabel:hover {
		text-decoration: underline;
	}
</style>
