<script lang="ts">
	import type { Positions } from './position.d';

	const positions: Positions = [
		{
			role: 'Full-Stack Web Developer',
			employer: 'Microsensor Labs',
			location: 'Chicago, IL',
			start: 'August 2018',
			end: 'Present',
			points: [
				'Worked closely with hardware team and stakeholders to design, develop, and deploy a full-stack data analysis and visualization application for improving hygiene compliance in hospitals, currently used by dozens of users in a clinical trial setting.',
				'Provided input across hardware and software to ensure simple and coherent user interactions and experiences.',
				'Developed marketing materials and web sites while establishing and maintaining our corporate visual identity.'
			]
		},
		{
			role: 'Corporate Research Co-Op',
			employer: 'Bosch',
			location: 'Renningen, Germany',
			start: 'January',
			end: 'August 2017',
			points: [
				'Designed and developed web app suite for large-scale, intuitive sensor data aggregation and analysis.',
				'Lived and worked in a diverse, multilingual, international environment.'
			]
		},
		{
			role: 'Innovation Lab Co-Op',
			employer: 'BMW Manufacturing',
			location: 'Greenville, SC',
			start: 'January',
			end: 'December 2015',
			points: [
				'Worked closely with stakeholders to design, develop, and deploy an iOS app for automobile inspections saving them over an hour a day.',
				'Assisted Deep Learning research efforts by benchmarking clusters and preparing datasets.',
				'Designed & built Raspberry Pi robot for exploring 3D imaging techniques.'
			]
		}
	];
</script>

<section id="work">
	<h2 class="container">Some Places I've Worked</h2>
	<section class="slideshow">
		{#each positions as { role, employer, location, start, end, points }}
			<article>
				<header>
					<h3 class="h4">{role}</h3>
					<p class="employer h5">@ {employer}</p>
					<p class="location">{location}</p>
					<p class="duration">{start} &ndash {end}</p>
				</header>
				<ul>
					{#each points as point}
						<li>{point}</li>
					{/each}
				</ul>
			</article>
		{/each}
	</section>
</section>

<style>
	#work {
		position: relative;
		--x-spacing: 0.5rem;
		/* TODO: iffy compatability? */
		--card-width: min(85vw, var(--content-width) + 4rem);
	}
	@media (min-width: 42rem) {
		#work {
			--x-spacing: 1rem;
		}
	}

	h2 {
		padding-bottom: 0;
	}
	.slideshow {
		display: flex;
		overflow-x: scroll;
		overflow-y: hidden;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}
	.slideshow::-webkit-scrollbar {
		display: none;
	}

	.slideshow:before,
	.slideshow:after {
		content: '';
		/* center cards in view */
		flex: 0 0 calc(100vw - var(--card-width) / 2 + var(--x-spacing));
	}

	article:not(:last-of-type) {
		margin-right: var(--x-spacing);
	}
	article {
		flex: 1 0 var(--card-width);
		scroll-snap-align: center;
		background-color: rgb(var(--c2));
		border-radius: 1rem;
		padding: 1rem;
		max-height: calc(100vh - 4rem);

		display: flex;
		flex-direction: column;
		position: relative;
	}
	@media (min-width: 42rem) {
		/* align card with start of container*/
		.slideshow:before {
			flex: 0 0 calc(var(--main-padding) + var(--container-margin-width));
		}
		.slideshow:after {
			/* allow last card to align with snap start*/
			flex: 0 0
				calc(100vw - var(--container-margin-width) - var(--main-padding) - var(--card-width));
		}
		.slideshow {
			scroll-padding-left: calc(var(--main-padding) + var(--container-margin-width));
		}
		article {
			scroll-snap-align: start;
		}
	}
	article,
	header,
	ul {
		transition: background-color var(--transition-speed-medium);
	}
	header {
		padding: 1rem;
	}
	header,
	ul {
		background-color: rgba(var(--bg), 0.25);
		border-radius: 1rem;
	}
	header > * {
		margin-top: 0;
		margin-bottom: 0;
	}
	.employer {
		margin-bottom: 1rem;
	}
	.duration {
		font-style: italic;
	}

	ul {
		flex: 1;
		list-style-type: '\203A   ';
		overflow-y: scroll;
		--padding: 1rem; /* top/bottom enforced by before/after */
		padding-right: var(--padding);
		--padding-left: 2rem;
		padding-left: var(--padding-left);
	}
	ul:before,
	ul:after {
		/* padding top & bottom */
		/* also scroll indicators */
		height: var(--padding);
		content: '';
		display: list-item;
		width: calc(100% + var(--padding-left) + var(--padding));
		margin-left: calc(-1 * var(--padding-left));
		transition: box-shadow var(--transition-speed-medium);
	}
	ul:before {
		position: sticky;
		z-index: 1;
		top: 0;
		border-radius: 1rem 1rem 0 0;
		box-shadow: inset 0 0.5rem 0.5rem rgba(var(--bg), 0.25);
	}
	ul:after {
		position: sticky;
		border-radius: 0 0 1rem 1rem;
		bottom: 0;
		box-shadow: inset 0 -0.5rem 0.5rem rgba(var(--bg), 0.25);
	}
	li {
		position: relative;
	}
	article > *:last-child {
		margin-bottom: 0;
	}
</style>
