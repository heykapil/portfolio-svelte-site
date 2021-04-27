<script lang="ts">
	export let image: string;
</script>

<article>
	<img src={image} />
	<div class="content">
		<header>
			<h4><slot name="header" /></h4>
		</header>

		<slot />

		<slot name="image" />

		<ul>
			<slot name="technologies" />
		</ul>

		<ul>
			<slot name="links" />
		</ul>
	</div>
</article>

<style>
	article {
		position: relative;

		display: grid;
		gap: 0 2rem;
		align-content: center;
		align-items: center;
		justify-content: start;

		--content-width: 65ch;
	}
	@media (min-width: 42rem) {
		article {
			grid-template-columns: auto auto;
		}
	}

	img {
		max-width: calc(var(--container-width) - var(--content-width));
		width: 100%;
		height: auto;
		margin-bottom: 1rem;
		border-radius: 1rem;
		justify-self: center;
	}
	.content {
		max-width: var(--content-width);
	}
	article > *:last-child {
		margin-bottom: 3rem;
	}
	article:after {
		content: '';
		position: absolute;
		width: 100vw;
		top: 0;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;
		height: 100%;
		z-index: -1;
		transform: skewY(-3deg);
	}
	article:nth-of-type(1):after {
		background-color: rgb(var(--c5));
	}
	article:nth-of-type(2):after {
		background-color: rgb(var(--c4));
	}
	article:nth-of-type(3):after {
		background-color: rgb(var(--c3));
	}
</style>
