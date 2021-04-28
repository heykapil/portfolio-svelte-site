<script lang="ts">
	import ProjectLinkList from './ProjectLinkList.svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	export let image: string | undefined = undefined;
	export let noBorder = false;
</script>

<article class:no-border={noBorder}>
	<slot name="header" />

	<ProjectTechList>
		<slot name="technologies" />
	</ProjectTechList>

	<slot />

	<ProjectLinkList>
		<slot name="links" />
	</ProjectLinkList>
</article>

<style>
	article {
		border-radius: 1rem;
		padding: var(--main-padding);
		background-color: rgb(var(--bg));
		transition: background-color var(--transition-speed-medium),
			box-shadow var(--transition-speed-medium);
		box-shadow: 0 0 0 calc(1rem / 6) rgb(var(--c3)), 0 0 0 calc(2rem / 6) rgb(var(--c4)),
			0 0 0 calc(3rem / 6) rgb(var(--c5));
	}
	article.no-border {
		box-shadow: none;
	}
	article > :global(:first-child) {
		margin-top: 0;
	}
	article > :global(:last-child) {
		margin-bottom: 0;
	}
</style>
