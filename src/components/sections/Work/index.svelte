<script lang="ts">
	import type { Positions } from './position.d';
	import { slide } from 'svelte/transition';
	import Boopable from '../../Boopable.svelte';

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

	let openIndex: number = 0;
</script>

<section id="work" class="container">
	<h2>Some Places I've Worked</h2>
	<section class="accordion">
		{#each positions as { role, employer, location, start, end, points }, index}
			<article>
				<Boopable let:boopage>
					<button
						class:open={openIndex === index}
						on:click={() => (openIndex = index)}
						style="--boopage:{openIndex === index ? 0 : boopage};"
					>
						<h3 class="h5">{role}<br />@ {employer}</h3>
						<p class="location">{location}</p>
						<p class="duration">{start} &ndash {end}</p>
					</button>
				</Boopable>
				{#if openIndex === index}
					<ul transition:slide>
						{#each points as point}
							<li>{point}</li>
						{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</section>
</section>

<style>
	#work {
		position: relative;
	}
	.accordion,
	article {
		transition: background-color var(--transition-speed-medium);
		border-radius: 1rem;
		padding: 1rem;
	}
	.accordion {
		background-color: rgb(var(--c2));
		display: grid;
		gap: 1rem;
	}
	article {
		background-color: rgba(var(--bg), 0.8);
	}
	button {
		display: block;
		width: 100%;
		text-align: left;
		border: 0;
		font-size: initial;
		color: inherit;

		margin-bottom: 1rem;

		background: none;
		-webkit-appearance: none;
		appearance: none;

		padding-right: 3rem;
		position: relative;
		cursor: pointer;
	}
	button:after {
		content: '\25BE';
		font-size: 1.25rem;
		position: absolute;
		right: 0;
		top: 0;
		width: 3rem;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;

		transform: translateY(calc(0.3rem * var(--boopage)));
		will-change: transform;
	}
	button > * {
		margin: 0;
		padding: 0;
	}
	.h5 {
		margin-bottom: 1rem;
	}
	.duration {
		font-style: italic;
	}

	ul {
		margin: 0;
		padding-left: 2rem;
	}
</style>
