<script>
	import gsap from 'gsap';
	export let open = false;
	export let ariaLabel = 'toggle menu';
	export let width = 80;

	function OpenNav() {
		if (open === true) {
			gsap.to('.navBar', {
				width: 'auto',
				height: 'auto',
				top: '0px',
				bottom: '0px',
				left: '0px',
				right: '0px',
				borderRadius: '0%',
				overflowY: 'scroll',
				duration: 0.2
			});
			gsap
				.to('.navContent', {
					display: 'block'
				})
				.delay(0.5);
		} else {
			gsap.to('.navBar', {
				width: '9rem',
				height: '9rem',
				borderRadius: '0% 0% 100% 0%',
				overflowY: 'hidden',
				duration: 0.2
			});
			gsap.to('#NavContent', {
				display: 'none'
			});
		}
	}
</script>

<button
	class="navbarButton"
	on:click={() => (open = !open)}
	on:click={OpenNav}
	aria-expanded={open}
	aria-label={ariaLabel}
>
	<svg class:open viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="5" {width}>
		<path
			stroke-linecap="round"
			class="top"
			d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
		/>
		<path stroke-linecap="round" class="middle" d="m 30,50 h 40" />
		<path
			stroke-linecap="round"
			class="bottom"
			d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
		/>
	</svg>
</button>

<style>
	:root {
		--transition-duration: 400ms;
	}

	button {
		cursor: pointer;
		display: flex;
		align-items: center;
		overflow: hidden;
	}

	svg {
		transition: transform var(--transition-duration);
	}

	.top {
		stroke-dasharray: 40 160;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.middle {
		transform-origin: 50%;
		transition: transform var(--transition-duration);
	}

	.bottom {
		stroke-dasharray: 40 85;
		transition: stroke-dashoffset var(--transition-duration);
	}

	.open {
		transform: rotate(45deg);
	}

	.open .top,
	.open .bottom {
		stroke-dashoffset: -64px;
	}

	.open .middle {
		transform: rotate(90deg);
	}

	.navbarButton {
		z-index: 99;
		position: fixed;
		top: 1rem;
		left: 1rem;
		background: none;
		color: inherit;
		border: none;
		padding: 0;
		font: inherit;
		outline: inherit;
	}
</style>
