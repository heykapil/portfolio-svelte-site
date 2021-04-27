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
