<script lang="ts">
	import FeaturedProject from './FeaturedProject.svelte';
	import OtherProjectBox from './OtherProjectBox.svelte';
	import OtherProject from './OtherProject.svelte';

	import type { Project } from './projects';
	const imageSite = 'https://res.cloudinary.com/decepulis/image/upload';

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
			imageSite,
			imagePath: 'v1634046941/decepulis/sanibit_r7qkjq.png',
			imageAlt: 'The Sanibit Dashboard, feturing a line graph of hand hygine compliance over time',
			imageWidth: 3010,
			imageHeight: 2100,
			links: [{ type: 'info', href: 'https://www.microsensorlabs.com/sanibit' }]
		},
		{
			header: 'Midwest Microbio Site',
			summary: `A minimal marketing website designed and built for a buddy's budding beer business. Interactive visualizations make visits to the site informative and memorable. Prismic CMS allows easy changes to commonly-updated areas of the site. Recently transitioned from Pug, Parcel, and Bootstrap&hellip; because Svelte is just the best.`,
			technologies: [
				{ name: 'Svelte', details: 'SvelteKit, TypeScript, Pancake, Spring, Stores' },
				{ name: 'Tailwind CSS' },
				{ name: 'Prismic CMS' },
				{ name: 'd3-force' }
			],
			imageSite,
			imagePath: 'v1634046940/decepulis/midwest-microbio_jfrmkn.png',
			imageAlt: `The Midwest Microbio home page`,
			imageWidth: 2880,
			imageHeight: 1800,
			links: [{ type: 'external', href: 'https://www.midwestmicrobio.com/' }]
		},
		{
			header: 'Sensor Analytics Platform',
			summary: `A stack of applications providing sensor data storage, real-time monitoring, and historical analysis; all with a modular API.`,
			technologies: [{ name: 'jQuery' }, { name: 'Node.js' }, { name: 'InfluxDB' }],
			imageSite,
			imagePath: 'v1634046938/decepulis/pisuite_fh0y4z.png',
			imageAlt:
				'The Sensor Analytics Platform home page, featuring a complex query below and a line graph of its result above',
			imageWidth: 1189,
			imageHeight: 719
		}
	];

	const otherProjects: Project[] = [
		{
			header: 'Microsensor Labs Site',
			summary: `A marketing website providing not only information regarding Microsensor Labs' projects, but also a lightweight <a href="https://jamstack.wtf" target="_blank">JAMStack</a> blog and jobs listing built on Netlify and Gatsby.`,
			technologies: [{ name: 'React', details: 'Gatsby' }, { name: 'Netlify CMS' }],
			imageSite,
			imagePath: 'v1634046943/decepulis/microsensor_cjc2mn.png',
			imageAlt: 'The Microsensor Labs home page',
			imageWidth: 3360,
			imageHeight: 2100,
			links: [{ type: 'external', href: 'https://www.microsensorlabs.com/' }]
		},
		{
			header: 'Our Famliy Website',
			summary: `Once a wedding RSVP and info website, now a place for me to put our slideshows so I wouldn't have to bore people in person! The perfect opportunity to learn about Svelte + Sapper (now SvelteKit) and Cloudinary, lean into a bold design, and finally write a tribute to the legendary <a href="http://www.firewatchgame.com" target="_blank">Firewatch parallax effect</a>, like I've always wanted to.`,
			technologies: [
				{ name: 'Svelte', details: 'Sapper, SvelteKit, Spring, Stores' },
				{ name: 'Cloudinary' }
			],
			imageSite,
			imagePath: 'v1634046941/decepulis/kcdc_ouq1g7.png',
			imageAlt: 'The home page of the website; a sunset with a city skyline in front of it.',
			imageWidth: 3360,
			imageHeight: 2100,
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
			imageSite,
			imagePath: 'v1634046940/decepulis/weasley-clock_ogq7wf.png',
			imageAlt: `A clock, except instead of hours around the edges, locations like 'Home' and 'Away'`,
			imageWidth: 3360,
			imageHeight: 2100,
			links: [{ type: 'github', href: 'https://github.com/decepulis/weasley-clock' }]
		},
		{
			header: 'Formula Fun!',
			summary: `Some friends started up a betting pool for the 2021 season of Formula One. "Buy" four drivers and win points based on how they do. I wondered if I could beat the game with some statistics&hellip;`,
			technologies: [{ name: 'Svelte', details: 'TypeScript, Stores' }],
			imageSite,
			imagePath: 'v1634046940/decepulis/formula-fun_d588z9.png',
			imageAlt: `A website featuring a large table of statistics`,
			imageWidth: 3360,
			imageHeight: 2100,
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
		{#each featuredProjects as project}
			<FeaturedProject {project} />
		{/each}
	</section>
	<section class="other-project-section">
		<h3>Other Noteworthy Stuff</h3>
		{#each otherProjects as project}
			<OtherProject {project} />
		{/each}
		<OtherProjectBox noBorder>
			<svelte:fragment slot="header">
				<h4>More</h4>
			</svelte:fragment>
			<p>
				See so much more, including my graveyard of half-finished projects, on
				<a href="https://github.com/decepulis?tab=repositories">GitHub</a>.
			</p>
		</OtherProjectBox>
	</section>
</section>

<style>
	.other-project-section h3 {
		margin-top: 0;
		padding: 0 1rem;
	}
	.other-project-section {
		margin-top: var(--section-padding);

		display: grid;
		gap: var(--main-padding);
		--card-width: calc(var(--container-width) / 3);
	}
	@media (min-width: 42rem) {
		.other-project-section {
			grid-template-columns: 1fr 1fr;
			gap: var(--main-padding);
		}
		.other-project-section h3 {
			padding: var(--section-padding);
		}
	}
</style>
