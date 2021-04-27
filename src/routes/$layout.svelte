<script>
	import LayoutTypography from '../components/LayoutTypography.svelte';
</script>

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

	/* variables */
	:global(:root) {
		--main-padding: 1rem;
		--break-width: 42rem;
		--container-width: calc(1.5 * var(--break-width));

		--light: 255, 255, 255;
		--dark: 0, 0, 0;

		--bg: 245, 239, 214;
		--text: var(--dark);
		--not-text: var(--light);

		--red: 213, 47, 34;
		--orange: 236, 101, 55;
		--pink: 223, 118, 146;
		--peach: 237, 192, 190;
		--gold: 243, 171, 81;
		--yellow: 231, 218, 106;
		--blue: 148, 194, 188;
		--green: 174, 198, 110;
	}

	:global(body) {
		--c1: var(--peach);
		--c2: var(--pink);
		--c3: var(--red);
		--c4: var(--gold);
		--c5: var(--orange);
	}
	:global(body.alt) {
		--c1: var(--yellow);
		--c2: var(--gold);
		--c3: var(--orange);
		--c4: var(--green);
		--c5: var(--blue);
	}
	:global(body.dark) {
		--bg: 0, 0, 0;
		--text: var(--light);
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
