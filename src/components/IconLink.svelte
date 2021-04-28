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
	.visually-hidden {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
