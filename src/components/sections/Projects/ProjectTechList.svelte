<script lang="ts">
	export let details: string;
</script>

<ul>
	<slot />
</ul>

<style>
	ul {
		list-style-type: none;
		padding: 0;
	}
</style>
