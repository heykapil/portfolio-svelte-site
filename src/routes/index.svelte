<script lang="ts">
	import Hero from '../components/sections/Hero.svelte';
	import Nav from '../components/sections/Nav.svelte';
	import About from '../components/sections/About.svelte';
	import Work from '../components/sections/Work/index.svelte';
	import Projects from '../components/sections/Projects/index.svelte';
	import Contact from '../components/sections/Contact.svelte';
	import Credit from '../components/sections/Credit.svelte';
</script>

<Hero />
<Nav />
<About />
<Work />
<Projects />
<Contact />
<Credit />

<style>
	/* :global(section) {
		min-height: 75vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	} */
	:global(h2) {
		text-align: center;
	}
	@media (min-width: 42rem) {
		:global(h2) {
			text-align: unset;
		}
	}
</style>
