<script lang="ts">
	import type { Positions } from './position.d';

	import ScrollTimeline from './ScrollTimeline.svelte';

	const positions: Positions = [
		{
			role: 'Full-Stack Web Developer and UI/UX Nut',
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

<section id="work" class="container">
	<h2>Where I've Worked</h2>
	<ScrollTimeline {positions} />
</section>

<style>
	#work {
		position: relative;
	}
</style>
