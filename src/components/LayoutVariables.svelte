<style>
	:global(:root) {
		--main-padding: 1rem;
		--section-padding: 3rem;
		--break-width: 42rem;
		--container-width: 63rem;
		--content-width: 65ch;
		--container-margin-width: 0rem;

		--border-width: 0.1rem;

		--light: 245, 239, 214;
		--dark: 43, 40, 40;

		--red: 213, 47, 34;
		--orange: 236, 101, 55;
		--pink: 223, 118, 146;
		--pink-x-light: 237, 216, 202;
		--pink-x-dark: 71, 54, 57;
		--peach: 237, 192, 190;
		--gold: 243, 171, 81;
		--gold-x-light: 242, 226, 192;
		--gold-x-dark: 81, 67, 51;
		--yellow: 231, 218, 106;
		--blue: 148, 194, 188;
		--green: 174, 198, 110;

		--transition-speed-short: 0.15s;
		--transition-speed-medium: 0.25s;
	}
	@media (min-width: 63rem) {
		:global(:root) {
			--container-margin-width: calc((100vw - var(--container-width)) / 2);
		}
	}

	/* Modes and their variables */
	:global(body), /* default while js loads */
	:global(body.primary) {
		--c1: var(--peach);
		--c2: var(--pink);
		--c2-x-light: var(--pink-x-light);
		--c2-x-dark: var(--pink-x-dark);
		--c3: var(--red);
		--c4: var(--gold);
		--c5: var(--orange);
	}
	:global(body.alt) {
		--c1: var(--yellow);
		--c2: var(--gold);
		--c2-x-light: var(--gold-x-light);
		--c2-x-dark: var(--gold-x-dark);
		--c3: var(--orange);
		--c4: var(--green);
		--c5: var(--blue);
	}

	:global(body.light),
	/* Defaults while JS Loads */
	:global(body) {
		--bg: var(--light);
		--text: var(--dark);
		--not-text: var(--light);

		--c2-x-bg: var(--c2-x-light);
	}

	:global(body.dark) {
		--bg: var(--dark);
		--text: var(--light);
		--not-text: var(--dark);

		--c2-x-bg: var(--c2-x-dark);
	}
	/* Default while JS loads in prefers-color-scheme: dark */
	@media (prefers-color-scheme: dark) {
		:global(body) {
			--bg: var(--dark);
			--text: var(--light);
			--not-text: var(--dark);

			--c2-x-bg: var(--c2-x-dark);
		}
	}
</style>
