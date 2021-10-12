<script lang="ts">
	import type { Positions } from './position.d';
	import SlidingDetails from '../../SlidingDetails.svelte';

	const positions: Positions = [
		{
			role: 'Full-Stack Web Developer',
			employer: 'Microsensor Labs',
			location: 'Chicago, IL',
			start: 'November 2018',
			end: 'Present',
			points: [
				'Worked closely with hardware team and stakeholders to design, develop, and deploy a full-stack data analysis and visualization application for improving hygiene compliance in hospitals, currently used by dozens of users in a clinical trial setting.',
				'Provided input across hardware and software to ensure simple and coherent user interactions and experiences.',
				'Established and maintained our corporate visual identity while developing marketing materials and web sites.'
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
			role: 'Student Researcher',
			employer: 'University of Cincinnati',
			location: 'Cincinnati, OH',
			start: 'May',
			end: 'July 2016',
			points: ['Simulated neural network hardware in MATLAB to support research.']
		},
		{
			role: 'Innovation Lab Co-Op',
			employer: 'BMW Manufacturing',
			location: 'Greenville, SC',
			start: 'January',
			end: 'December 2015',
			points: [
				'Worked closely with stakeholders to design, develop, and deploy an iOS app for automobile inspections, saving them over an hour a day.',
				'Assisted Deep Learning research efforts by benchmarking clusters and preparing datasets.'
			]
		}
	];
</script>

<section id="work" class="container">
	<h2>Some Places I've Worked</h2>
	<section class="accordion">
		{#each positions as { role, employer, location, start, end, points }, index}
			<SlidingDetails initial={index === 0 ? 'open' : undefined}>
				<svelte:fragment slot="summary">
					<h3 class="h5">{role}<br />@ {employer}</h3>
					<p class="location">{location}</p>
					<p class="duration">{start} &ndash {end}</p>
				</svelte:fragment>
				<ul>
					{#each points as point}
						<li>{point}</li>
					{/each}
				</ul>
			</SlidingDetails>
		{/each}
	</section>
</section>

<style>
	#work {
		position: relative;
	}
	.accordion,
	:global(details) {
		transition: background-color var(--transition-speed-medium),
			box-shadow var(--transition-speed-medium);
		border-radius: 1rem;
	}
	.accordion {
		background-color: rgba(var(--c2), var(--intensity-c));
		display: grid;
		gap: 1rem;
		padding: 1rem;
	}
	:global(details) {
		background-color: rgba(var(--bg), 0.8);
		box-shadow: 0 0 0 0 rgb(var(--c2)), 0 0 0 0 rgb(var(--c1));
	}
	:global(details:hover) {
		box-shadow: 0 0 0 calc(2 * var(--border-width)) rgb(var(--c3)),
			0 0 0 calc(4 * var(--border-width)) rgb(var(--c1));
	}
	:global(summary) {
		padding: 1rem;
	}
	:global(.content) {
		padding: 1rem;
		padding-top: 0;
	}

	.location {
		margin-bottom: 0;
	}
	.duration {
		margin-top: 0;
	}
	.h5 {
		margin-bottom: 1rem;
	}

	ul {
		margin: 0;
		padding-left: 2rem;
	}
</style>
