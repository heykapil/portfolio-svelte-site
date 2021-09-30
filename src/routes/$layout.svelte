<script>
	import './$layout.css';
	import FaviconManager from '../components/FaviconManager.svelte';
</script>

<FaviconManager />

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Open+Sans:ital@0;1&family=Playfair+Display:wght@900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<main>
	<slot />
</main>
