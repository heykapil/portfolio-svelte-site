<script lang="ts">
	import ProjectLinkList from './ProjectLinkList.svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	export let image: string | undefined = undefined;
	export let alt: typeof image = undefined;
	export let noBorder = false;
</script>

<article class:no-border={noBorder}>
	<slot name="header" />

	<!-- <img loading="lazy" src={image} {alt} /> -->

	{#if $$slots.technologies}
		<ProjectTechList>
			<slot name="technologies" />
		</ProjectTechList>
	{/if}

	<slot />

	{#if $$slots.links}
		<ProjectLinkList>
			<slot name="links" />
		</ProjectLinkList>
	{/if}
</article>

<style>
	article {
		padding: var(--main-padding);
		border: calc(2 * var(--border-width)) solid rgb(var(--c3));

		display: flex;
		flex-direction: column;

		position: relative;
		overflow: hidden;
	}
	article,
	img {
		border-radius: 1rem;
		transition: background-color var(--transition-speed-medium),
			border var(--transition-speed-medium), opacity var(--transition-speed-medium);
	}
	img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;

		z-index: -2;
		object-fit: cover;
		opacity: 0.066;
	}
	@supports (mix-blend-mode: soft-light) {
		img {
			opacity: 0.66;
			mix-blend-mode: soft-light;
		}
	}
	article.no-border {
		border: none;
	}
	article > :global(*) {
		margin-top: 0;
	}
	article > :global(:last-child) {
		margin-bottom: 0;
	}
</style>
