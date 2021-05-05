<script lang="ts">
	import ProjectLinkList from './ProjectLinkList.svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	export let image: string;
	export let alt: string;
</script>

<article>
	<img loading="lazy" {alt} src={image} />
	<div class="content">
		<slot name="image" />

		<slot name="header" />

		<ProjectTechList>
			<slot name="technologies" />
		</ProjectTechList>

		<slot />

		<ProjectLinkList>
			<slot name="links" />
		</ProjectLinkList>
	</div>
</article>

<style>
	/* Up first, you should know this is all run by a grid */
	article {
		position: relative;

		display: grid;
		padding: var(--main-padding) var(--main-padding) calc(2 * var(--main-padding))
			var(--main-padding);
		gap: var(--main-padding);
		align-content: center;
		align-items: center;
		justify-content: start;
	}
	@media (min-width: 42rem) {
		article {
			grid-template-columns: auto auto;
			--x-padding: 0;
		}
	}

	/* Each child gives up some margins and lets the grid manage that all */
	.content > :global(:first-child) {
		margin-top: 0;
	}
	.content {
		max-width: var(--content-width);
		position: relative;
	}

	/* Of course, each child has its own appearance */
	img {
		max-width: calc(var(--container-width) - var(--content-width));
		width: 100%;
		height: auto;
		border-radius: 1rem;
		justify-self: center;
	}

	/* Behind the content is a blob that provides contrast with the text */
	article:before {
		content: '';

		position: absolute;
		top: calc(4 * var(--main-padding));
		right: 0;
		bottom: var(--main-padding);
		left: 0;

		background-color: rgba(var(--bg), 0.8);
		transition: background-color var(--transition-speed-medium);
		border-radius: 1rem;
		z-index: -1;
	}
	@media (min-width: 42rem) {
		article {
			padding: calc(2 * var(--main-padding)) var(--main-padding);
			padding-left: 0;
		}
		article:before {
			top: var(--main-padding);
			right: 0;
			bottom: var(--main-padding);
			left: calc(3 * var(--main-padding));
		}
	}
	/* Behind the article is a stripe of color */
	article:after {
		content: '';
		position: absolute;
		width: 100vw;
		top: 0;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		height: 100%;
		z-index: -2;
		transition: background-color var(--transition-speed-medium);
	}

	article:nth-of-type(1):after {
		--project-bg: var(--c3);
	}
	:global(body.alt) article:nth-of-type(1):after {
		--project-bg: var(--c1);
	}
	article:nth-of-type(2):after {
		--project-bg: var(--c5);
	}
	article:nth-of-type(3):after {
		--project-bg: var(--c4);
	}
	article:after {
		--project-bg-alpha: 1;
		background-color: rgba(var(--project-bg), var(--project-bg-alpha));
	}
	:global(body.dark) article:after {
		--project-bg-alpha: 0.75;
	}
</style>
