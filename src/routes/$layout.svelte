<script>
	import LayoutVariables from '../components/LayoutVariables.svelte';
	import LayoutTypography from '../components/LayoutTypography.svelte';
</script>

<LayoutVariables />
<LayoutTypography />

<main>
	<slot />
</main>

<style>
	/* reset */
	:global(html),
	:global(body) {
		padding: 0;
		margin: 0;
	}
	/* behavior */
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 4rem;
	}
	:global(*) {
		box-sizing: border-box;
	}

	@media (min-width: 42rem) {
		:global(main) {
			--main-padding: 2rem;
		}
	}

	:global(body) {
		background-color: rgb(var(--bg));
		color: rgb(var(--text));
	}

	:global(.full-bleed),
	:global(.container) {
		padding-left: var(--main-padding);
		padding-right: var(--main-padding);
		padding-bottom: var(--main-padding);
		padding-left: max(env(safe-area-inset-left), var(--main-padding));
		padding-right: max(env(safe-area-inset-right), var(--main-padding));
		padding-bottom: max(env(safe-area-inset-bottom), var(--main-padding));
	}
	:global(.container) {
		max-width: var(--container-width);
		margin-left: auto;
		margin-right: auto;
	}
</style>
