<script lang="ts">
	import OtherProject from './OtherProject.svelte';
	import FeaturedProject from './FeaturedProject.svelte';
	import ProjectLinkItem from './ProjectLinkItem.svelte';

	import sanibitImg from './img/sanibit.png';
	import microsensorImg from './img/microsensor.png';
	import pisuiteImg from './img/pisuite.png';
	import kcdcImg from './img/kcdc.png';
	import clockImg from './img/weasley-clock.png';
	import midwestImg from './img/midwest-microbio.png';
	import f1Img from './img/formula-fun.png';
</script>

<section id="projects" class="container">
	<h2>Some Things I've Built</h2>
	<section>
		<h3>Featured Projects</h3>
		<FeaturedProject image={sanibitImg}>
			<svelte:fragment slot="header">Sanibit Web Platform</svelte:fragment>
			<p>
				A full-stack application that analyzes millions of data points to help healthcare providers
				improve their hygiene and reduce hospital-acquired infections. Sanibit Web easy-to-use and
				comprehensive data visualizations to managers and supervisors so that they can discover
				trends and take action. At the same time, it gamifies hygiene for individual providers with
				friendly competition, engaging interactions and animations, and a rewards system.
			</p>
			<svelte:fragment slot="technologies">
				<li>React (TypeScript, Router, Context, Spring, Recharts)</li>
				<li>Django (Rest Framework, PostgreSQL, JWT Auth)</li>
				<li>Github Actions</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="info" href="https://www.sanibit.com/" />
			</svelte:fragment>
		</FeaturedProject>
		<FeaturedProject image={microsensorImg}>
			<svelte:fragment slot="header">Microsensor Labs Site</svelte:fragment>
			<p>
				A marketing website providing not only information regarding Microsensor Labs' projects, but
				also a lightweight <a href="https://jamstack.wtf">JAMStack</a> blog and jobs listing built on
				Netlify and Gatsby.
			</p>
			<svelte:fragment slot="technologies">
				<li>React (Gatsby)</li>
				<li>Netlify CMS</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.microsensorlabs.com/" />
			</svelte:fragment>
		</FeaturedProject>
		<FeaturedProject image={pisuiteImg}>
			<svelte:fragment slot="header">Sensor Analytics Platform</svelte:fragment>
			<p>
				A stack of applications providing sensor data storage, real-time monitoring, and historical
				analysis; all with a modular API.
			</p>
			<svelte:fragment slot="technologies">
				<li>jQuery</li>
				<li>Node.js</li>
				<li>InfluxDB</li>
			</svelte:fragment>
		</FeaturedProject>
	</section>
	<section class="other-project-section">
		<h3>Other Noteworthy Projects</h3>
		<OtherProject image={kcdcImg}>
			<svelte:fragment slot="header">Wedding Website</svelte:fragment>
			<p>
				We're getting married! No better time to learn Svelte + Sapper, lean into a bold design, and
				finally write a tribute to the legendary
				<a href="http://www.firewatchgame.com">Firewatch parallax effect</a>, like I've always
				wanted to.
			</p>
			<svelte:fragment slot="technologies">
				<li>Svelte (Sapper, Spring)</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.kcdc.fun/" />
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/kcdc.fun" />
			</svelte:fragment>
		</OtherProject>
		<OtherProject image={clockImg}>
			<svelte:fragment slot="header">Serverless Weasley Clock</svelte:fragment>
			<p>
				I've been wanting to build a
				<a href="https://harrypotter.fandom.com/wiki/Weasley_Clock">Weasley Clock</a>
				for a long time. Some cell phone location data, a Raspberry Pi or Arduino, a bit of clockwork,
				and you've got something that seems like magic.
			</p>
			<svelte:fragment slot="technologies">
				<li>Svelte (TypeScript)</li>
				<li>Netlify Funtions</li>
				<li>FaunaDB</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/weasley-clock" />
			</svelte:fragment>
		</OtherProject>
		<OtherProject image={midwestImg}>
			<svelte:fragment slot="header">Midwest Microbio</svelte:fragment>
			<p>A minimal marketing website designed and built for a buddy's budding beer business.</p>
			<svelte:fragment slot="technologies">
				<li>Pug</li>
				<li>Parcel</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.midwestmicrobio.com/" />
				<ProjectLinkItem
					iconType="github"
					href="https://github.com/decepulis/midwest-microbio-site"
				/>
			</svelte:fragment>
		</OtherProject>
		<OtherProject image={f1Img}>
			<svelte:fragment slot="header">Formula Fun</svelte:fragment>
			<p>
				Some friends started up a betting pool for the 2021 season of Formula One. "Buy" four
				drivers and win points based on how they do. I wondered if I could beat the game with some
				statistics&hellip;
			</p>
			<svelte:fragment slot="technologies">
				<li>Svelte (TypeScript)</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://formula-fun.netlify.app/" />
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/formula-fun" />
			</svelte:fragment>
		</OtherProject>
		<OtherProject noBorder>
			<svelte:fragment slot="header">More</svelte:fragment>
			See so much more, including my graveyard of half-finished projects, on
			<a href="https://github.com/decepulis?tab=repositories">Github</a>
		</OtherProject>
	</section>
</section>

<style>
	.other-project-section {
		display: grid;
		gap: 2rem;
		--card-width: calc(var(--container-width) / 3);
	}
	@media (min-width: 42rem) {
		.other-project-section {
			grid-template-columns: 1fr 1fr;
		}
	}
</style>
