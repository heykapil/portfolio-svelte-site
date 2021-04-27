<script lang="ts">
	export let image: string;
	export let noBorder = false;
</script>

<article class:no-border={noBorder}>
	<h4><slot name="header" /></h4>

	<slot />

	<ul>
		<slot name="technologies" />
	</ul>

	<ul>
		<slot name="links" />
	</ul>
</article>

<style>
	article {
		border-radius: 1rem;
		padding: 1rem;
		background-color: rgb(var(--bg));
		box-shadow: 0 0 0 calc(1rem / 6) rgb(var(--c5)), 0 0 0 calc(2rem / 6) rgb(var(--c4)),
			0 0 0 calc(3rem / 6) rgb(var(--c3));
	}
	article.no-border {
		box-shadow: none;
	}
	article > *:first-child {
		margin-top: 0;
	}
	article > *:last-child {
		margin-bottom: 0;
	}
</style>
