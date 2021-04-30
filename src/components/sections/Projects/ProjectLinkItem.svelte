<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { InfoIcon, ExternalLinkIcon, GithubIcon } from 'svelte-feather-icons';

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
	<a {href} title={iconLabel[iconType]} class="no-effect">
		<svelte:component this={icon[iconType]} size="1x" />
		<span class="visually-hidden">{iconLabel[iconType]}</span>
	</a>
</li>

<style>
	li {
		width: 2rem;
		height: 2rem;
		font-size: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
	li:not(:last-of-type) {
		margin-right: 1.5rem;
	}
	a {
		position: absolute;

		background-color: rgba(var(--c4), 0.5);
		transition: background-color var(--transition-speed-medium),
			box-shadow var(--transition-speed-medium);

		--tap-target: calc((44px - 2rem) / 2);
		margin: calc(-1 * var(--tap-target));
		padding: calc(var(--tap-target));
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	a:focus {
		outline: none;
		box-shadow: 0 0 0 calc(2 * var(--border-width)) rgb(var(--c5)), 0 0 0 0 rgb(var(--c3));
	}
	a:hover {
		box-shadow: 0 0 0 calc(2 * var(--border-width)) rgb(var(--c5)),
			0 0 0 calc(4 * var(--border-width)) rgb(var(--c3));
	}
</style>
