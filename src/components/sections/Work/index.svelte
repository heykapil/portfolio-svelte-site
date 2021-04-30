<script lang="ts">
	import type { Positions } from './position.d';
	import bulletImg from './chevrons-right.svg';
	import ScrollTimeline from './ScrollTimeline.svelte';

	const positions: Positions = [
		{
			role: 'Full-Stack Web Developer',
			employer: 'Microsensor Labs',
			location: 'Chicago, IL',
			start: 'August 2018',
			end: 'Present',
			points: [
				'Worked closely with hardware team and stakeholders to design, develop, and deploy a full-stack data analysis and visualization application for improving hygiene compliance in hospitals, currently used by dozens of users in a clinical trial setting.',
				'Provided input across hardware and software to ensure simple and coherent user interactions and experiences',
				'Developed marketing materials and web sites while establishing and maintaining our corporate visual identity'
			]
		},
		{
			role: 'Corporate Research Co-Op',
			employer: 'Bosch',
			location: 'Renningen, Germany',
			start: 'January',
			end: 'August 2017',
			points: [
				'Designed and developed web app suite for large-scale, intuitive sensor data aggregation and analysis',
				'Lived and worked in a diverse, multilingual, international environment'
			]
		},
		{
			role: 'Innovation Lab Co-Op',
			employer: 'BMW Manufacturing',
			location: 'Greenville, SC',
			start: 'January',
			end: 'December 2015',
			points: [
				'Worked closely with stakeholders to design, develop, and deploy an iOS app for automobile inspections saving them over an hour a day',
				'Assisted Deep Learning research efforts by benchmarking clusters and preparing datasets',
				'Designed & built Raspberry Pi robot for exploring 3D imaging techniques'
			]
		}
	];
</script>

<section id="work" style="--iconUrl:url({bulletImg});">
	<h2 class="full-bleed">Some Places I've Worked</h2>
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
	}
	h2 {
		padding-bottom: 0;
	}
	.slideshow {
		--x-spacing: 1rem;
		--card-width: 80vw;
		display: flex;
		overflow-x: scroll;
		scroll-snap-type: x mandatory;
		scrollbar-width: none;
	}
	.slideshow::-webkit-scrollbar {
		display: none;
	}
	.slideshow:before,
	.slideshow:after {
		content: '';
		flex: 0 0 calc((100vw - var(--card-width)) / 2);
	}
	article {
		scroll-snap-align: center;
		flex: 1 0 var(--card-width);
		max-width: var(--content-width);
		background-color: rgba(var(--c1), 0.5);
		border-radius: 1rem;
		padding: 1rem;
		max-height: 90vh;
		overflow: scroll;
	}
	article:not(:last-of-type) {
		margin-right: var(--x-spacing);
	}
	header > * {
		margin-top: 0;
		margin-bottom: 0;
	}
	.employer {
		margin-bottom: 1rem;
	}
	header {
		background-color: rgba(var(--bg), 0.5);
		border-radius: 1rem;
		padding: 1rem;
	}
	ul {
		list-style-type: none;
	}
	li {
		position: relative;
	}
	li:before {
		content: '';
		background-image: var(--iconUrl);
		background-size: 1rem 1rem;
		width: 1rem;
		height: 1rem;
		position: absolute;
		left: -1.325rem;
		top: 0.325rem;
	}
	article > *:last-child {
		margin-bottom: 0;
	}
</style>
