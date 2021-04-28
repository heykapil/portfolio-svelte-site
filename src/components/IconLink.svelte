<script lang="ts">
	export let href: string;
	export let title: string;
</script>

<a {href} {title}>
	<slot />
	<span class="visually-hidden" />
</a>

<style>
	a :global(svg) {
		vertical-align: -0.125em;
	}
</style>
