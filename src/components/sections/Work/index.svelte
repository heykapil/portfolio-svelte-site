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

<section id="work" class="container">
	<h2>Some Places I've Worked</h2>
	<section class="accordion">
		{#each positions as { role, employer, location, start, end, points }, index}
			<details open={index === 0}>
				<summary>
					<h3 class="h5">{role}<br />@ {employer}</h3>
					<p class="location">{location}</p>
					<p class="duration">{start} &ndash {end}</p>
				</summary>
				<ul>
					{#each points as point}
						<li>{point}</li>
					{/each}
				</ul>
			</details>
		{/each}
	</section>
</section>

<style>
	#work {
		position: relative;
	}
	.accordion {
		background-color: rgb(var(--c2));
	}
	details {
		background-color: rgba(var(--bg), 0.8);
	}
	.accordion,
	details {
		transition: background-color var(--transition-speed-medium);
		border-radius: 1rem;
		padding: 1rem;
	}

	details:not(:last-child) {
		margin-bottom: 1rem;
	}
	summary::-webkit-details-marker {
		display: none;
	}
	summary {
		list-style: none;
		padding-right: 3rem;
		position: relative;
	}
	summary:after {
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
		transform: rotate(-90deg);
		transition: transform var(--transition-speed-medium);
	}
	details[open] summary:after {
		transform: rotate(0);
	}
	summary > * {
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
		padding-left: 2rem;
	}
</style>
