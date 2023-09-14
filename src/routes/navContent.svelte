<script>
	import ProjectContent from './ProjectContent.svelte';

	import DeliverableSorter from './DeliverableSorter.svelte';
</script>

<div class="navContent" id="NavContent">
	<DeliverableSorter />
	<ProjectContent />
</div>

<style lang="scss">
	.navContent {
		display: none;
		height: 100vh;
		width: 100%;
	}
</style>
