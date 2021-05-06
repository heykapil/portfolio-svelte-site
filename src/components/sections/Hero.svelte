<script lang="ts">
	import RadText from '../../components/RadText.svelte';
</script>

<section id="hero" class="container">
	<p class="eyebrow">Hello there! My name is</p>
	<h1><RadText>Darius Cepulis.</RadText></h1>
	<p class="headline">I develop and design awesome web experiences.</p>
</section>

<style>
	section {
		padding-top: 2rem;
		padding-top: max(env(safe-area-inset-top), 2rem);

		/*
		Using load-vh (set in app.html) ensures that
		text is centered on iOS,
		and content doesn't move unexpectedly
		when window is resizing
		*/
		min-height: calc(100 * var(--load-vh, 1vh));

		display: flex;
		flex-direction: column;

		align-items: center;
		justify-content: center;
		text-align: center;

		overflow: hidden;
	}

	.eyebrow,
	h1 {
		margin-bottom: 0;
	}
</style>
