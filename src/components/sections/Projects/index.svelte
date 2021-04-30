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
</script>

<section id="projects" class="container">
	<h2>Some Things I've Built</h2>
	<section>
		<FeaturedProject image={sanibitImg}>
			<svelte:fragment slot="header">
				<h4>Sanibit Web Platform</h4>
			</svelte:fragment>
			<p>
				A full-stack application that analyzes millions of data points to help healthcare providers
				improve their hygiene and reduce hospital-acquired infections. The app provides easy-to-use
				and comprehensive data visualizations to managers and supervisors so that they can discover
				trends and take action. At the same time, it gamifies hygiene for individual providers with
				friendly competition, engaging interactions and animations, and a rewards system.
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>
					React
					<svelte:fragment slot="details">
						TypeScript, Router, Context, Spring, Recharts
					</svelte:fragment>
				</ProjectTechItem>
				<ProjectTechItem>
					Django
					<svelte:fragment slot="details">
						Rest Framework, Channels 2, PostgreSQL, JWT Auth
					</svelte:fragment>
				</ProjectTechItem>
				<ProjectTechItem>
					AWS
					<svelte:fragment slot="details">EC2, RDS, CLB, S3, ElastiCache</svelte:fragment>
				</ProjectTechItem>
				<ProjectTechItem>GitHub Actions</ProjectTechItem>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="info" href="https://www.sanibit.com/" />
			</svelte:fragment>
		</FeaturedProject>
		<FeaturedProject image={microsensorImg}>
			<svelte:fragment slot="header">
				<h4>Microsensor Labs Site</h4>
			</svelte:fragment>
			<p>
				A marketing website providing not only information regarding Microsensor Labs' projects, but
				also a lightweight <a href="https://jamstack.wtf">JAMStack</a> blog and jobs listing built on
				Netlify and Gatsby.
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>
					React
					<svelte:fragment slot="details">Gatsby</svelte:fragment>
				</ProjectTechItem>
				<ProjectTechItem>Netlify CMS</ProjectTechItem>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.microsensorlabs.com/" />
			</svelte:fragment>
		</FeaturedProject>
		<FeaturedProject image={pisuiteImg}>
			<svelte:fragment slot="header">
				<h4>Sensor Analytics Platform</h4>
			</svelte:fragment>
			<p>
				A stack of applications providing sensor data storage, real-time monitoring, and historical
				analysis; all with a modular API.
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>jQuery</ProjectTechItem>
				<ProjectTechItem>Node.js</ProjectTechItem>
				<ProjectTechItem>InfluxDB</ProjectTechItem>
			</svelte:fragment>
		</FeaturedProject>
	</section>
	<section class="other-project-section">
		<h3>Other Noteworthy Projects</h3>
		<OtherProject image={kcdcImg}>
			<svelte:fragment slot="header">
				<h4>Wedding Website</h4>
			</svelte:fragment>
			<p>
				We're getting married! No better time to learn Svelte + Sapper, lean into a bold design, and
				finally write a tribute to the legendary
				<a href="http://www.firewatchgame.com">Firewatch parallax effect</a>, like I've always
				wanted to.
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>
					Svelte
					<svelte:fragment slot="details">Sapper, Spring</svelte:fragment>
				</ProjectTechItem>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.kcdc.fun/" />
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/kcdc.fun" />
			</svelte:fragment>
		</OtherProject>
		<OtherProject image={clockImg}>
			<svelte:fragment slot="header">
				<h4>Serverless Weasley Clock</h4>
			</svelte:fragment>
			<p>
				I've been wanting to build a
				<a href="https://harrypotter.fandom.com/wiki/Weasley_Clock">Weasley Clock</a>
				for a long time. Some cell phone location data, a Raspberry Pi or Arduino, a bit of clockwork,
				and you've got something that seems like magic.
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>
					Svelte
					<svelte:fragment slot="details">TypeScript</svelte:fragment>
				</ProjectTechItem>
				<ProjectTechItem>Netlify Funtions</ProjectTechItem>
				<ProjectTechItem>FaunaDB</ProjectTechItem>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/weasley-clock" />
			</svelte:fragment>
		</OtherProject>
		<OtherProject image={midwestImg}>
			<svelte:fragment slot="header">
				<h4>Midwest Microbio</h4>
			</svelte:fragment>
			<p>A minimal marketing website designed and built for a buddy's budding beer business.</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>Pug</ProjectTechItem>
				<ProjectTechItem>Parcel</ProjectTechItem>
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
			<svelte:fragment slot="header">
				<h4>Formula Fun</h4>
			</svelte:fragment>
			<p>
				Some friends started up a betting pool for the 2021 season of Formula One. "Buy" four
				drivers and win points based on how they do. I wondered if I could beat the game with some
				statistics&hellip;
			</p>
			<svelte:fragment slot="technologies">
				<ProjectTechItem>
					Svelte
					<svelte:fragment slot="details">TypeScript, Stores</svelte:fragment>
				</ProjectTechItem>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://formula-fun.netlify.app/" />
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/formula-fun" />
			</svelte:fragment>
		</OtherProject>
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
	@media (min-width: 42rem) {
		.other-project-section {
			grid-template-columns: 1fr 1fr;
			gap: var(--main-padding);
		}
	}
</style>
