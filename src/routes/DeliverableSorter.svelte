<script>
	import gsap from 'gsap';

	function toggle1() {
		gsap.to('.indicator2', {
			width: '0%',
			duration: 0.5
		});
		gsap.to('.indicator1', {
			width: '100%',
			duration: 0.5
		});
		gsap.to('.projectContentByLearningOutcome', {
			visibility: 'hidden'
		});
		gsap.to('.projectContentByPhase', {
			visibility: 'visible'
		});
	}

	function toggle2() {
		gsap.to('.indicator1', {
			width: '0%',
			duration: 0.5
		});
		gsap.to('.indicator2', {
			width: '100%',
			duration: 0.5
		});
		gsap.to('.projectContentByPhase', {
			visibility: 'hidden'
		});
		gsap.to('.projectContentByLearningOutcome', {
			visibility: 'visible'
		});
	}
</script>

<div class="deliverableSorter">
	<div class="toggle">
		<button on:click={toggle1} class="toggleOption">
			<span>Project Phase</span>
			<div class="indicator indicator1" />
		</button>
		<button on:click={toggle2} class="toggleOption">
			<span>Learning Outcome</span>
			<div class="indicator indicator2" />
		</button>
	</div>
</div>

<style lang="scss">
	.deliverableSorter {
		font-family: 'Comfortaa', cursive;

		width: 100%;
		display: flex;
		justify-content: center;
	}
	.toggle {
		display: flex;
		margin-top: 2rem;
	}
	.toggleOption {
		padding: 12px;
		border-radius: 50px;
		background: none;
		color: inherit;
		border: none;
		font: inherit;
		outline: inherit;
		cursor: pointer;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.indicator {
		height: 3px;
		width: 100%;
		margin-top: 5px;
		background-color: red;
		border-radius: 5px;
	}

	.indicator2 {
		width: 0%;
	}
</style>
