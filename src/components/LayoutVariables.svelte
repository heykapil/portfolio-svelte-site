<style>
	:global(:root) {
		--main-padding: 1rem;
		--section-padding: 3rem;
		--break-width: 42rem;
		--container-width: calc(1.5 * var(--break-width));
		--content-width: 65ch;

		--border-width: 0.1rem;

		--light: 245, 239, 214;
		--dark: 43, 40, 40;

		--red: 213, 47, 34;
		--orange: 236, 101, 55;
		--pink: 223, 118, 146;
		--peach: 237, 192, 190;
		--gold: 243, 171, 81;
		--yellow: 231, 218, 106;
		--blue: 148, 194, 188;
		--green: 174, 198, 110;

		--transition-speed-short: 0.15s;
		--transition-speed-medium: 0.25s;
	}

	/* Modes and their variables */
	:global(body), /* default while js loads */
	:global(body.primary) {
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
	:global(body.light) {
		--bg: var(--light);
		--text: var(--dark);
		--not-text: var(--light);
	}
	:global(body.dark) {
		--bg: var(--dark);
		--text: var(--light);
		--not-text: var(--dark);
	}
	/* Defaults while JS Lodas */
	:global(body) {
		--bg: var(--light);
		--text: var(--dark);
		--not-text: var(--light);
	}
	@media (prefers-color-scheme: dark) {
		:global(body) {
			--bg: var(--dark);
			--text: var(--light);
			--not-text: var(--dark);
		}
	}
</style>
