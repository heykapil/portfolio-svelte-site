<script lang="ts">
	import Popover from '../../Popover.svelte';
</script>

<li>
	{#if $$slots.details}
		<Popover>
			<slot />
			<svelte:fragment slot="content">
				<slot name="details" />
			</svelte:fragment>
		</Popover>
	{:else}
		<slot />
	{/if}
</li>

<style>
	li {
		display: inline;
		font-style: italic;
	}
	li:not(:last-of-type):after {
		content: ', ';
	}
</style>
