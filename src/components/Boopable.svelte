<script lang="ts">
	// https://www.joshwcomeau.com/react/boop/
	import { onDestroy } from 'svelte';
	import { spring } from 'svelte/motion';

	export let timing = 150;

	let booped = false;
	let boopTimeout: ReturnType<typeof setTimeout>;
	function boop() {
		booped = true;
	}
	$: {
		if (!booped) break $;
		clearTimeout(boopTimeout);
		setTimeout(() => (booped = false), timing);
	}
	onDestroy(() => clearTimeout(boopTimeout));

	let boopage = spring({ value: 0 }, { stiffness: 0.1, damping: 0.25 });
	$: boopage.set({ value: booped ? 1 : 0 });
</script>

<span on:mouseenter={boop} on:click={boop}>
	<slot {booped} boopage={$boopage.value} />
</span>

<style>
</style>
