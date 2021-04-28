<script lang="ts">
	import { spring } from 'svelte/motion';
	let scrollY: number;
	let scrollSpring1 = spring({ scrollY: 0 }, { stiffness: 0.05, damping: 1 });
	let scrollSpring2 = spring({ scrollY: 0 }, { stiffness: 0.075, damping: 1 });
	let scrollSpring3 = spring({ scrollY: 0 }, { stiffness: 0.1, damping: 1 });
	let scrollSpring4 = spring({ scrollY: 0 }, { stiffness: 0.15, damping: 1 });
	let scrollSpring5 = spring({ scrollY: 0 }, { stiffness: 0.2, damping: 1 });

	$: {
		scrollSpring1.set({ scrollY });
		scrollSpring2.set({ scrollY });
		scrollSpring3.set({ scrollY });
		scrollSpring4.set({ scrollY });
		scrollSpring5.set({ scrollY });
	}
	$: offset1 = scrollY - $scrollSpring1.scrollY;
	$: offset2 = scrollY - $scrollSpring2.scrollY;
	$: offset3 = scrollY - $scrollSpring3.scrollY;
	$: offset4 = scrollY - $scrollSpring4.scrollY;
	$: offset5 = scrollY - $scrollSpring5.scrollY;

	function getHidden(offset: number): boolean {
		if (offset >= 0.01 || offset <= -0.01) {
			return false;
		}
		return true;
	}
</script>

<span class="wrapper">
	<span
		class="layer layer-1"
		aria-hidden
		class:hidden={getHidden(offset1)}
		style="
		color: rgb(var(--c5));
		transform: translate3d(0,{offset1}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-2"
		aria-hidden
		class:hidden={getHidden(offset2)}
		style="
		color: rgb(var(--c4));
		transform: translate3d(0,{offset2}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-3"
		aria-hidden
		class:hidden={getHidden(offset3)}
		style="
		color: rgb(var(--c3));
		transform: translate3d(0,{offset3}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-4"
		aria-hidden
		class:hidden={getHidden(offset4)}
		style="
		color: rgb(var(--c2));
		transform: translate3d(0,{offset4}px,0);"
	>
		<slot />
	</span>
	<span
		class="layer layer-5"
		aria-hidden
		class:hidden={getHidden(offset5)}
		style="
		color: rgb(var(--c1));
		transform: translate3d(0,{offset5}px,0);"
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

		will-change: transform;

		opacity: 1;
		transition: opacity 0s;

		transition: color var(--transition-speed-medium);
	}
	.layer.hidden {
		opacity: 0;
		transition: opacity 1s;
	}
	@media (prefers-reduced-motion) {
		.layer {
			opacity: 0.66 !important;
		}
		.layer-5 {
			transform: translate(1px, 1px) !important;
		}
		.layer-4 {
			transform: translate(2px, 2px) !important;
		}
		.layer-3 {
			transform: translate(3px, 3px) !important;
		}
		.layer-2 {
			transform: translate(4px, 4px) !important;
		}
		.layer-1 {
			transform: translate(5px, 5px) !important;
		}
	}
	.base-text {
		/* Force stacking context */
		position: relative;
		z-index: 1;
	}
</style>
