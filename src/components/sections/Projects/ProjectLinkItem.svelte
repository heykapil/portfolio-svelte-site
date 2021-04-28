<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { InfoIcon, ExternalLinkIcon, GithubIcon } from 'svelte-feather-icons';

	import IconLink from '../../IconLink.svelte';

	type IconType = 'external' | 'info' | 'github';
	export let href: string;
	export let iconType: IconType;

	const icon: Record<IconType, typeof SvelteComponent> = {
		external: ExternalLinkIcon,
		info: InfoIcon,
		github: GithubIcon
	};
	const iconLabel: Record<IconType, string> = {
		external: 'View Site',
		info: 'Learn More',
		github: 'View Source'
	};
</script>

<li>
	<IconLink {href} title={iconLabel[iconType]}>
		<svelte:component this={icon[iconType]} size="1x" />
	</IconLink>
</li>

<style>
	li {
		width: 2rem;
		height: 2rem;
		font-size: 1.25rem;
		--tap-target-width: calc((44px - 2rem) / 2);
		--tap-target-height: calc((44px - 2rem) / 2);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		position: relative;

		background-color: rgba(var(--c4), 0.5);
		transition: background-color var(--transition-speed-medium),
			box-shadow var(--transition-speed-medium);
	}
	li:not(:last-of-type) {
		margin-right: 1rem;
	}

	li:hover {
		box-shadow: 0 0 0 calc(1rem / 6) rgb(var(--c5)), 0 0 0 calc(2rem / 6) rgb(var(--c3));
	}
	li :global(a) {
		position: absolute;

		margin: calc(-1 * var(--tap-target-width));
		padding: calc(var(--tap-target-width));
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
