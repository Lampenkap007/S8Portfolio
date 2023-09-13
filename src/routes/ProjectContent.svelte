<script>
	import data from '../lib/assets/data/contentByPhase.json';
	console.log(data);
</script>

<div class="projectContent">
	<ul class="cards">
		{#each data as card}
			<li class="card">
				<h2>{card.title}</h2>
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.projectContent {
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
	}
	.cards {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
	}
	.card {
		background-color: red;
	}
</style>
