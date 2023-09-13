<script>
	import NavContent from './NavContent.svelte';

	import AnimatedHamburger from './animatedHamburger.svelte';
</script>

<nav id="navbar" class="navBar">
	<AnimatedHamburger />
	<NavContent />
</nav>

<style lang="scss">
	.navBar {
		position: absolute;
		background-color: white;
		width: 9rem;
		height: 9rem;
		border-radius: 0% 0% 100% 0%;
		box-shadow: 10px 10px 36px 15px rgba(0, 0, 0, 0.08);
		display: flex;
		justify-content: center;
		align-items: center;
		padding-left: -3rem;
		transition: all 0.2s ease-in-out;
	}
</style>
