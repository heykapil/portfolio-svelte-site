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

	function getVisibility(offset: number): 'visible' | 'hidden' {
		if (offset >= 0.01 || offset <= -0.01) {
			return 'visible';
		}
		return 'hidden';
	}
</script>

<span class="wrapper">
	<span
		class="layer"
		style="
		color: rgb(var(--c5));
		transform: translate3d(0,{offset1}px,0);
		visibility: {getVisibility(
			offset1
		)};
	"
	>
		<slot />
	</span>
	<span
		class="layer"
		style="
		color: rgb(var(--c4));
		transform: translate3d(0,{offset2}px,0);
		visibility: {getVisibility(
			offset2
		)};
	"
	>
		<slot />
	</span>
	<span
		class="layer"
		style="
		color: rgb(var(--c3));
		transform: translate3d(0,{offset3}px,0);
		visibility: {getVisibility(
			offset3
		)};
	"
	>
		<slot />
	</span>
	<span
		class="layer"
		style="
		color: rgb(var(--c2));
		transform: translate3d(0,{offset4}px,0);
		visibility: {getVisibility(
			offset4
		)};
	"
	>
		<slot />
	</span>
	<span
		class="layer"
		style="
		color: rgb(var(--c1));
		transform: translate3d(0,{offset5}px,0);
		visibility: {getVisibility(
			offset5
		)};
	"
	>
		<slot />
	</span>
	<span class="base-text">
		<slot />
	</span>
</span>

<svelte:window bind:scrollY />

<style>
	.wrapper {
		position: relative;
	}
	.base-text,
	.layer {
		/*
		This CSS just puts the base text in the same
		drawing heirarchy as the layers
		*/
		will-change: transform;
		transform: translate3d(0, 0, 0);
	}
	.layer {
		pointer-events: none;
		position: absolute;
		width: 101%;
		height: 101%;
		left: 0;
		top: 0;
	}
</style>
