<script lang="ts">
	import Hero from '../components/sections/Hero.svelte';
	import Nav from '../components/sections/Nav.svelte';
	import About from '../components/sections/About.svelte';
	import Work from '../components/sections/Work/index.svelte';
	import Projects from '../components/sections/Projects/index.svelte';
	import Contact from '../components/sections/Contact/index.svelte';
	import Credits from '../components/sections/Credits.svelte';
</script>

<Hero />
<Nav />
<main>
	<About />
	<Work />
	<Projects />
	<Contact />
	<Credits />
</main>

<style>
	main {
		overflow-x: hidden;
	}
	main :global(h2) {
		text-align: center;
	}
	@media (min-width: 42rem) {
		main :global(h2) {
			text-align: unset;
		}
	}
</style>
