<script lang="ts">
	import { onMount } from 'svelte';
	import { reduceMotion } from '../stores';
	onMount(() => {
		const reduceQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
		$reduceMotion = reduceQuery.matches;

		const onQueryChange = (e: MediaQueryListEvent) => ($reduceMotion = e.matches);
		reduceQuery.addEventListener('change', onQueryChange);

		return () => reduceQuery.removeEventListener('change', onQueryChange);
	});
</script>
