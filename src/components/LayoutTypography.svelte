<style>
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap');

	:global(:root) {
		--body-font-family: 'Open Sans', sans-serif;
		--body-font-weight: 400;
		--body-line-height: 1.75;
		--header-font-family: 'Playfair Display', serif;
		--header-font-weight: 900;
		--header-line-height: 1.3;
	}

	:global(html) {
		font-size: 100%;
	}

	:global(body) {
		font-family: var(--body-font-family);
		font-weight: var(--body-font-weight);
		line-height: var(--body-line-height);
	}

	:global(p, ul, figure, blockquote) {
		margin-bottom: 1rem;
	}
	:global(figure),
	:global(blockquote) {
		margin-left: 0;
		margin-right: 0;
	}
	:global(abbr) {
		text-decoration-color: rgb(var(--c5));
		text-decoration-style: dotted;
	}
	/* :global(blockquote) {
		padding-left: 1rem;
		border-left: var(--border-width) solid rgb(var(--c5));
	} */
	:global :global(.h1),
	:global(h1),
	:global(.h2),
	:global(h2),
	:global(.h3),
	:global(h3),
	:global(.h4),
	:global(h4),
	:global(.h5),
	:global(h5),
	:global(.lead) {
		font-family: var(--header-font-family);
		font-weight: var(--header-font-weight);
		line-height: var(--header-line-height);
	}
	:global(.h1),
	:global(h1),
	:global(.h2),
	:global(h2),
	:global(.h3),
	:global(h3),
	:global(.h4),
	:global(h4),
	:global(.h5),
	:global(h5) {
		margin: var(--section-padding) 0 1.38rem;
	}

	:global(.h1),
	:global(h1) {
		margin-top: 0;
		font-size: 3.052rem;
		font-size: 12vw;
	}

	:global(.h2),
	:global(h2) {
		font-size: 2.441rem;
	}

	:global(.h3),
	:global(h3) {
		font-size: 1.953rem;
	}

	:global(.h4),
	:global(h4) {
		font-size: 1.563rem;
	}

	:global(.h5),
	:global(h5) {
		font-size: 1.25rem;
	}

	:global(.small),
	:global(small) {
		font-size: 0.8rem;
	}

	@media (min-width: 42rem) {
		:global(.h1),
		:global(h1) {
			margin-top: 0;
			font-size: 4.209rem;
		}

		:global(.h2),
		:global(h2) {
			font-size: 3.157rem;
		}

		:global(.h3),
		:global(h3) {
			font-size: 2.369rem;
		}

		:global(.h4),
		:global(h4) {
			font-size: 1.777rem;
		}

		:global(.h5),
		:global(h5) {
			font-size: 1.333rem;
		}

		:global(.small),
		:global(small) {
			font-size: 0.8rem;
		}
	}

	:global(a) {
		color: inherit;
	}
	:global(a:not(.no-effect)) {
		text-decoration: none;
		box-shadow: inset 0 calc(-1 * var(--border-width)) rgb(var(--c4));
		transition: box-shadow var(--transition-speed-short);
	}
	:global(a:not(.no-effect):hover) {
		box-shadow: inset 0 calc(-1 * var(--border-width)) rgb(var(--c4)),
			0 var(--border-width) rgb(var(--c5)), 0 calc(2 * var(--border-width)) rgb(var(--c3));
	}
	:global(a[target='_blank']) {
		cursor: ne-resize;
	}
</style>
