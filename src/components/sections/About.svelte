<script lang="ts">
	import headshot from '../../img/headshot.jpg';
	import ShortMediumLong from '../ShortMediumLong.svelte';
</script>

<section id="about" class="container">
	<h2>About Me</h2>
	<article>
		<img src={headshot} alt="Darius" />
		<div class="content">
			<ShortMediumLong>
				<svelte:fragment slot="short">
					<p>
						I'm currently the web developer at
						<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>, where I use web
						technologies and good design to help healthcare providers wash their hands better.
					</p>
					<p>
						I have experience working across the stack, from back-ends and infrastructure that
						handle production-grade demands to front-end experiences that just feel good.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="medium">
					<p>
						I'm currently the web developer at
						<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>, where I use web
						technologies and good design to help healthcare providers wash their hands better.
					</p>
					<p>
						I have experience working across the stack, from back-ends and infrastructure that
						handle production-grade demands to front-end experiences that just feel good.
					</p>
				</svelte:fragment>
				<svelte:fragment slot="long">
					<p>
						A few years ago, I applied for an embedded systems job at
						<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>&hellip; and they hired
						me as web developer for their hand hygiene compliance project,
						<a href="https://sanibit.com/">Sanibit</a>. That was the happiest mistake of my career.
					</p>
					<p>
						Since then, I've built up my skills to match the needs of the modern monstrous monoliths
						that are web apps. And I love working on it all, up and down the stack: optimizing
						databases and plugging vulnerabilities on our back-end, ensuring reliability with
						rock-solid tests and infrastructure on our
						<abbr title="Continuous Integration and Deployment">CI/CD</abbr> pipeline and cloud,
						geeking out over tooling to make sure developer experience leads to a maintanable
						product, and (most importantly) using my
						<abbr title="User Interaction and Experience">UI/UX</abbr>
						and front-end skills to provide an awesome experience for our users.
					</p>
				</svelte:fragment>
			</ShortMediumLong>
		</div>
	</article>
</section>

<style>
	article {
		display: grid;
		gap: 0 2rem;
		align-content: center;
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
	.content p:first-child {
		margin-top: 0;
	}
	.content p:last-child {
		margin-bottom: 0;
	}
</style>
