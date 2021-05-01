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
		min-width: 320px;
	}
	/* behavior */
	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 4rem;
	}
	:global(*),
	:global(*:before),
	:global(*:after) {
		box-sizing: border-box;
	}
	@media (prefers-reduced-motion) {
		:global(*),
		:global(*:before),
		:global(*:after) {
			transition: none !important;
			animation-delay: 0ms !important;
			animation-duration: 0ms !important;
		}
	}

	@media (min-width: 42rem) {
		:global(main) {
			--main-padding: 2rem;
		}
	}

	:global(body) {
		background-color: rgb(var(--bg));
		color: rgb(var(--text));
		transition: background-color var(--transition-speed-medium),
			color var(--transition-speed-medium);
	}

	/* Utilities */
	:global(.full-bleed),
	:global(.content-container),
	:global(.container) {
		padding-left: var(--main-padding);
		padding-right: var(--main-padding);
		padding-bottom: var(--main-padding);
		padding-left: max(env(safe-area-inset-left), var(--main-padding));
		padding-right: max(env(safe-area-inset-right), var(--main-padding));
		padding-bottom: max(env(safe-area-inset-bottom), var(--main-padding));
	}
	:global(.content-container),
	:global(.container) {
		margin-left: auto;
		margin-right: auto;
	}
	:global(.content-container) {
		max-width: var(--content-width);
	}
	:global(.container) {
		max-width: var(--container-width);
	}
	:global(.visually-hidden) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
