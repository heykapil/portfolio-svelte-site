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
			border var(--transition-speed-medium);
		border: calc(2 * var(--border-width)) solid rgb(var(--c3));

		display: flex;
		flex-direction: column;
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
