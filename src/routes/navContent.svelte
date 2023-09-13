<script>
	import ProjectContent from './ProjectContent.svelte';

	import DeliverableSorter from './DeliverableSorter.svelte';
</script>

<div class="navContent">
	<DeliverableSorter />
	<ProjectContent />
</div>

<style lang="scss">
	.navContent {
		height: 100vh;
		width: 100%;
		padding-left: 12rem;
		padding-right: 12rem;
	}
</style>
