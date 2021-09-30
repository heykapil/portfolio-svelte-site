<script lang="ts">
	import { onMount } from 'svelte';
	import { spring } from 'svelte/motion';

	// Use scroll value to manage springs
	let scrollY: number;
	const scrollSpring0 = spring({ scrollY: 0 }, { stiffness: 0.05, damping: 1 });
	const scrollSpring1 = spring({ scrollY: 0 }, { stiffness: 0.075, damping: 1 });
	const scrollSpring2 = spring({ scrollY: 0 }, { stiffness: 0.1, damping: 1 });
	const scrollSpring3 = spring({ scrollY: 0 }, { stiffness: 0.15, damping: 1 });
	const scrollSpring4 = spring({ scrollY: 0 }, { stiffness: 0.2, damping: 1 });

	$: {
		scrollSpring0.set({ scrollY });
		scrollSpring1.set({ scrollY });
		scrollSpring2.set({ scrollY });
		scrollSpring3.set({ scrollY });
		scrollSpring4.set({ scrollY });
	}

	// Use spring values to manage offset and hiding
	function getHidden(offset: number): boolean {
		if (offset >= 0.01 || offset <= -0.01) {
			return false;
		}
		return true;
	}

	let offset: [number, number, number, number, number] = [0, 0, 0, 0, 0];
	let hidden: [boolean, boolean, boolean, boolean, boolean] = [true, true, true, true, true];

	onMount(() => {
		let frame: ReturnType<typeof requestAnimationFrame>;

		function loop() {
			frame = requestAnimationFrame(loop);

			offset = [
				scrollY - $scrollSpring0.scrollY,
				scrollY - $scrollSpring1.scrollY,
				scrollY - $scrollSpring2.scrollY,
				scrollY - $scrollSpring3.scrollY,
				scrollY - $scrollSpring4.scrollY
			];
			hidden = [
				getHidden(offset[0]),
				getHidden(offset[1]),
				getHidden(offset[2]),
				getHidden(offset[3]),
				getHidden(offset[4])
			];
		}

		loop();

		return () => cancelAnimationFrame(frame);
	});
</script>

<span class="wrapper">
	<span
		class="layer layer-0"
		aria-hidden
		class:hidden={hidden[0]}
		style="
		color: rgb(var(--c5));
		transform: translate3d(0,{offset[0]}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-1"
		aria-hidden
		class:hidden={hidden[1]}
		style="
		color: rgb(var(--c4));
		transform: translate3d(0,{offset[1]}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-2"
		aria-hidden
		class:hidden={hidden[2]}
		style="
		color: rgb(var(--c3));
		transform: translate3d(0,{offset[2]}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-3"
		aria-hidden
		class:hidden={hidden[3]}
		style="
		color: rgb(var(--c2));
		transform: translate3d(0,{offset[3]}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-4"
		aria-hidden
		class:hidden={hidden[4]}
		style="
		color: rgb(var(--c1));
		transform: translate3d(0,{offset[4]}px,0);"
	>
		<slot />
	</span>
	<span class="base-text">
		<slot />
	</span>
</span>

<svelte:window bind:scrollY />

<style>
	span {
		white-space: nowrap;
	}
	.wrapper {
		position: relative;
	}
	.layer {
		pointer-events: none;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;

		opacity: 1;
		transition: opacity 0s;

		transition: color var(--transition-speed-medium);
		will-change: transform;
	}
	.layer.hidden {
		opacity: 0;
		transition: opacity 1s;
	}
	@media (prefers-reduced-motion) {
		.layer {
			opacity: 0.66 !important;
		}
		.layer-4 {
			transform: translate(1px, 1px) !important;
		}
		.layer-3 {
			transform: translate(2px, 2px) !important;
		}
		.layer-2 {
			transform: translate(3px, 3px) !important;
		}
		.layer-1 {
			transform: translate(4px, 4px) !important;
		}
		.layer-0 {
			transform: translate(5px, 5px) !important;
		}
	}
	.base-text {
		/* Force stacking context */
		position: relative;
		z-index: 1;
	}
</style>
