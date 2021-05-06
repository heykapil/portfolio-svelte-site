<script lang="ts">
	// https://www.joshwcomeau.com/react/boop/
	import { onMount, onDestroy } from 'svelte';
	import { spring } from 'svelte/motion';

	export let timing = 150;
	export let spanClass = '';

	// When booped is set to true,
	// start a timer which sets it back to false.
	let booped = false;
	let boopTimeout: ReturnType<typeof setTimeout>;
	const boop = () => (booped = true);
	$: {
		if (!booped) break $;
		clearTimeout(boopTimeout);
		setTimeout(() => (booped = false), timing);
	}
	onDestroy(() => clearTimeout(boopTimeout));

	// When the user prefers reduced motion,
	// disbale boops.
	let reducedMotion = false;
	onMount(() => {
		const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		reducedMotion = reduceQuery.matches;
		const onQueryChange = (e: MediaQueryListEvent) => (reducedMotion = e.matches);
		reduceQuery.addEventListener('change', onQueryChange);

		return () => reduceQuery.removeEventListener('change', onQueryChange);
	});

	// When booped is set to true (so long as reduced motion isn't enabled)
	// spin a spring up to 1
	// otherwise wind it down to 0
	let boopage = spring({ value: 0 }, { stiffness: 0.1, damping: 0.25 });
	$: {
		if (reducedMotion) {
			boopage.set({ value: 0 }, { hard: true });
		} else {
			boopage.set({ value: booped ? 1 : 0 });
		}
	}
</script>

<span on:mouseenter={boop} on:click={boop} class={spanClass}>
	<slot {booped} boopage={$boopage.value} />
</span>

<style>
</style>
