<script lang="ts">
	import { darkMode, altMode } from '../stores';

	$: href =
		$darkMode === 'dark' && $altMode === 'alt'
			? 'favicon-dark-alt.png'
			: $darkMode === 'dark'
			? 'favicon-dark.png'
			: $altMode === 'alt'
			? 'favicon-light-alt.png'
			: 'favicon-light.png';
	$: themeColor = $altMode === 'alt' ? '#94c2bc' : '#edc0be';
</script>

<!-- TODO: handle preload; SVG icons with media queries and classes? -->

<svelte:head>
	<link rel="shortcut icon" type="image/png" {href} />
	<link rel="shortcut icon" sizes="192x192" {href} />
	<link rel="apple-touch-icon" {href} />

	<meta name="msapplication-TileColor" content={themeColor} />
	<meta name="theme-color" content={themeColor} />
</svelte:head>
