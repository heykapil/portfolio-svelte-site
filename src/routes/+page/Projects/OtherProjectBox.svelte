<script lang="ts">
	import ProjectLinkList from './ProjectLinkList.svelte';
	import ProjectTechList from './ProjectTechList.svelte';

	export let noBorder = false;
</script>

<article class:no-border={noBorder}>
	<slot name="header" />

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
	article {
		border-radius: 1rem;
		transition: background-color var(--transition-speed-medium),
			border var(--transition-speed-medium), opacity var(--transition-speed-medium);
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
