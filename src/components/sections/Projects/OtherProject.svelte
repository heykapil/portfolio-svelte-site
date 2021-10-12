<script lang="ts">
	import OtherProjectBox from './OtherProjectBox.svelte';
	import ProjectLinkItem from './ProjectLinkItem.svelte';
	import ProjectTechItem from './ProjectTechItem.svelte';

	import type { Project } from './projects';
	export let project: Project;
</script>

<OtherProjectBox>
	<svelte:fragment slot="header">
		<h4>{project.header}</h4>
	</svelte:fragment>
	<p>
		{@html project.summary}
	</p>
	<svelte:fragment slot="technologies">
		{#each project.technologies as { name, details }}
			<ProjectTechItem {name} {details} />
		{/each}
	</svelte:fragment>
	<svelte:fragment slot="links">
		{#each project.links ?? [] as { type, href }}
			<ProjectLinkItem iconType={type} {href} />
		{/each}
	</svelte:fragment>
</OtherProjectBox>
