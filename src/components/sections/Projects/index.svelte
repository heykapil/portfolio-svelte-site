<script lang="ts">
	import OtherProject from './OtherProject.svelte';
	import FeaturedProject from './FeaturedProject.svelte';
	import ProjectLinkItem from './ProjectLinkItem.svelte';
	import ProjectTechItem from './ProjectTechItem.svelte';

	import sanibitImg from './img/sanibit.jpg';
	import microsensorImg from './img/microsensor.jpg';
	import pisuiteImg from './img/pisuite.png';
	import kcdcImg from './img/kcdc.jpg';
	import clockImg from './img/weasley-clock.jpg';
	import midwestImg from './img/midwest-microbio.jpg';
	import f1Img from './img/formula-fun.png';

	import type { Project } from './projects';

	const featuredProjects: Project[] = [
		{
			header: 'Sanibit Web Platform',
			summary:
				'A full-stack application that analyzes millions of data points to help healthcare providers improve their hygiene and reduce hospital-acquired infections. The app provides easy-to-use and comprehensive data visualizations to managers and supervisors so that they can discover trends and take action. At the same time, it gamifies hygiene for individual providers with friendly competition, engaging interactions and animations, and a rewards system.',
			technologies: [
				{ name: 'React', details: 'TypeScript, Router, Context, Spring, Recharts' },
				{ name: 'Django', details: 'Rest Framework, Channels 2, PostgreSQL, JWT Auth' },
				{ name: 'AWS', details: 'EC2, RDS, CLB, S3, ElastiCache, Cloudfront, Route53' },
				{ name: 'Redis' },
				{ name: 'GitHub Actions' }
			],
			image: sanibitImg,
			imageAlt: 'The Sanibit Dashboard, feturing a line graph of hand hygine compliance over time',
			links: [{ type: 'info', href: 'https://www.microsensorlabs.com/sanibit' }]
		},
		{
			header: 'Midwest Microbio Site',
			summary: `A minimal marketing website designed and built for a buddy's budding beer business. Interactive visualizations make visits to the site informative and memorable. Prismic CMS allows easy changes to commonly-updated areas of the site. Recently transitioned from Pug, Parcel, and Bootstrap... because Svelte is just the best.`,
			technologies: [
				{ name: 'Svelte', details: 'SvelteKit, TypeScript, Pancake, Spring, Stores' },
				{ name: 'Tailwind CSS' },
				{ name: 'Prismic CMS' },
				{ name: 'd3-force' }
			],
			image: midwestImg,
			imageAlt: `The Midwest Microbio home page`,
			links: [{ type: 'external', href: 'https://www.midwestmicrobio.com/' }]
		},
		{
			header: 'Sensor Analytics Platform',
			summary: `A stack of applications providing sensor data storage, real-time monitoring, and historical analysis; all with a modular API.`,
			technologies: [{ name: 'jQuery' }, { name: 'Node.js' }, { name: 'InfluxDB' }],
			image: pisuiteImg,
			imageAlt:
				'The Sensor Analytics Platform home page, featuring a complex query below and a line graph of its result above'
		}
	];

	const otherProjects: Project[] = [
		{
			header: 'Microsensor Labs Site',
			summary: `A marketing website providing not only information regarding Microsensor Labs' projects, but also a lightweight <a href="https://jamstack.wtf" target="_blank">JAMStack</a> blog and jobs listing built on Netlify and Gatsby.`,
			technologies: [{ name: 'React', details: 'Gatsby' }, { name: 'Netlify CMS' }],
			image: microsensorImg,
			imageAlt: 'The Microsensor Labs home page',
			links: [{ type: 'external', href: 'https://www.microsensorlabs.com/' }]
		},
		{
			header: 'Wedding Website',
			summary: `We got married! No better time to learn Svelte + Sapper (now SvelteKit), lean into a bold design, and finally write a tribute to the legendary <a href="http://www.firewatchgame.com" target="_blank">Firewatch parallax effect</a>, like I've always wanted to.`,
			technologies: [
				{ name: 'Svelte', details: 'Sapper, SvelteKit, Spring, Stores' },
				{ name: 'Cloudinary' }
			],
			image: kcdcImg,
			imageAlt: 'The home page of the website; a sunset with a city skyline in front of it.',
			links: [
				{ type: 'external', href: 'https://www.kcdc.fun/' },
				{ type: 'github', href: 'https://github.com/decepulis/kcdc.fun' }
			]
		},
		{
			header: 'Serverless Weasley Clock',
			summary: `I've been wanting to build a <a href="https://harrypotter.fandom.com/wiki/Weasley_Clock" target="_blank">Weasley Clock</a> for a long time. Some cell phone location data and a Raspberry Pi, and you've got something that seems like magic.`,
			technologies: [
				{ name: 'Svelte', details: 'TypeScript' },
				{ name: 'Netlify Functions' },
				{ name: 'FaunaDB' }
			],
			image: clockImg,
			imageAlt: `A clock, except instead of hours around the edges, locations like 'Home' and 'Away'`,
			links: [{ type: 'github', href: 'https://github.com/decepulis/weasley-clock' }]
		},
		{
			header: 'Formula Fun!',
			summary: `Some friends started up a betting pool for the 2021 season of Formula One. "Buy" four drivers and win points based on how they do. I wondered if I could beat the game with some statistics&hellip;`,
			technologies: [{ name: 'Svelte', details: 'TypeScript, Stores' }],
			image: f1Img,
			imageAlt: `A website featuring a large table of statistics`,
			links: [
				{ type: 'external', href: 'https://formula-fun.netlify.app/' },
				{ type: 'github', href: 'https://github.com/decepulis/formula-fun' }
			]
		}
	];
</script>

<section id="projects" class="container">
	<h2>Some Things I've Made</h2>
	<section>
		{#each featuredProjects as { header, summary, technologies, image, imageAlt, links }}
			<FeaturedProject {image} alt={imageAlt}>
				<svelte:fragment slot="header">
					<h4>{header}</h4>
				</svelte:fragment>
				<p>
					{@html summary}
				</p>
				<svelte:fragment slot="technologies">
					{#each technologies as { name, details }}
						{#if typeof details !== 'undefined'}
							<ProjectTechItem>
								{name}
								<svelte:fragment slot="details">
									{details}
								</svelte:fragment>
							</ProjectTechItem>
						{:else}
							<ProjectTechItem>{name}</ProjectTechItem>
						{/if}
					{/each}
				</svelte:fragment>
				<svelte:fragment slot="links">
					{#each links ?? [] as { type, href }}
						<ProjectLinkItem iconType={type} {href} />
					{/each}
				</svelte:fragment>
			</FeaturedProject>
		{/each}
	</section>
	<section class="other-project-section">
		<h3>Other Noteworthy Stuff</h3>
		{#each otherProjects as { header, summary, technologies, image, imageAlt, links }}
			<OtherProject {image} alt={imageAlt}>
				<svelte:fragment slot="header">
					<h4>{header}</h4>
				</svelte:fragment>
				<p>
					{@html summary}
				</p>
				<svelte:fragment slot="technologies">
					{#each technologies as { name, details }}
						{#if typeof details !== 'undefined'}
							<ProjectTechItem>
								{name}
								<svelte:fragment slot="details">
									{details}
								</svelte:fragment>
							</ProjectTechItem>
						{:else}
							<ProjectTechItem>{name}</ProjectTechItem>
						{/if}
					{/each}
				</svelte:fragment>
				<svelte:fragment slot="links">
					{#each links ?? [] as { type, href }}
						<ProjectLinkItem iconType={type} {href} />
					{/each}
				</svelte:fragment>
			</OtherProject>
		{/each}
		<OtherProject noBorder>
			<svelte:fragment slot="header">
				<h4>More</h4>
			</svelte:fragment>
			<p>
				See so much more, including my graveyard of half-finished projects, on
				<a href="https://github.com/decepulis?tab=repositories">GitHub</a>.
			</p>
		</OtherProject>
	</section>
</section>

<style>
	.other-project-section h3 {
		margin-top: 0;
	}
	.other-project-section {
		margin-top: var(--section-padding);

		display: grid;
		gap: var(--main-padding);
		--card-width: calc(var(--container-width) / 3);
	}
	.other-project-section h3 {
		padding: var(--main-padding);
	}
	@media (min-width: 42rem) {
		.other-project-section {
			grid-template-columns: 1fr 1fr;
			gap: var(--main-padding);
		}
	}
</style>
