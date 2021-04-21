<script lang="ts">
	import { MailIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'svelte-feather-icons';

	import RadText from '../components/RadText.svelte';
	import ShortMediumLong from '../components/ShortMediumLong.svelte';
	import IconLink from '../components/IconLink.svelte';

	import Project from '../components/Project.svelte';
	import ProjectLinkItem from '../components/ProjectLinkItem.svelte';

	import Work from '../components/Work.svelte';
</script>

<section id="hero" class="container">
	<header>
		<p class="eyebrow">Hi there! My name is</p>
		<h1><RadText>Darius Cepulis.</RadText></h1>
	</header>

	<ShortMediumLong defaultLength="medium">
		<svelte:fragment slot="legend">Bio Length</svelte:fragment>
		<svelte:fragment slot="short">
			<p slot="short">
				I develop and design awesome web experiences. I'm currently the web developer at
				<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="medium">
			<p>
				I'm a web developer with experience working across the stack, from cloud infrastructure to
				production-grade back-ends to&mdash;my favorite&mdash;designing and developing front-end
				experiences that just feel good.
			</p>
			<p>
				I'm currently the web developer at
				<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>, where I use web
				technologies and good design to help healthcare providers wash their hands better.
			</p>
		</svelte:fragment>
		<svelte:fragment slot="long">
			<p>I develop and design awesome web experiences.</p>
			<p>
				A few years ago, I applied for an embedded systems job at
				<a href="https://www.microsensorlabs.com/">Microsensor Labs</a>&hellip; and they hired me as
				web developer for their hand hygiene compliance project,
				<a href="https://sanibit.com/">Sanibit</a>. That was the happiest mistake of my career.
			</p>
			<p>
				Since then, I've built up my skills to match the needs of the modern monstrous monoliths
				that are web apps. And I love working on it all, up and down the stack: optimizing databases
				and plugging vulnerabilities on our back-end, ensuring reliability with rock-solid tests and
				infrastructure on our
				<abbr title="Continuous Integration and Deployment">CI/CD</abbr> pipeline and cloud, geeking
				out over tooling to make sure developer experience leads to a maintanable product, and (most
				importantly) using my
				<abbr title="User Interaction and Experience">UI/UX</abbr>
				and front-end skills to provide an awesome experience for our users.
			</p>
		</svelte:fragment>
	</ShortMediumLong>
</section>

<section id="work" class="container">
	<h2>Where I've Worked</h2>
	<Work>
		<svelte:fragment slot="header">
			<h4>
				Full-Stack Web Developer and UI/UX Nut <span class="employer">at Microsensor Labs</span>
			</h4>
		</svelte:fragment>
		<svelte:fragment slot="location">
			<p>Chicago, IL</p>
		</svelte:fragment>
		<svelte:fragment slot="duration">
			<p>August 2018 &ndash; Present</p>
		</svelte:fragment>
		<ul>
			<li>
				Worked closely with hardware team and stakeholders to design, develop, and deploy a
				full-stack data analysis and visualization application for improving hygiene compliance in
				hospitals, currently used by dozens of users in a clinical trial setting.
			</li>
			<li>
				Provided input across hardware and software to ensure simple and coherent user interactions
				and experiences
			</li>
			<li>
				Developed marketing materials and web sites while establishing and maintaining our corporate
				visual identity
			</li>
		</ul>
	</Work>
	<Work>
		<svelte:fragment slot="header">
			<h4>
				Corporate Research Co-Op <span class="employer">at Bosch</span>
			</h4>
		</svelte:fragment>
		<svelte:fragment slot="location">
			<p>Renningen, Germany</p>
		</svelte:fragment>
		<svelte:fragment slot="duration">
			<p>January &ndash; August 2017</p>
		</svelte:fragment>
		<ul>
			<li>
				Designed and developed web app suite for large-scale, intuitive sensor data aggregation and
				analysis
			</li>
			<li>Lived and worked in a diverse, multilingual, international environment</li>
		</ul>
	</Work>
	<Work>
		<svelte:fragment slot="header">
			<h4>
				Innovation Lab Co-Op <span class="employer">at BMW Manufacturing</span>
			</h4>
		</svelte:fragment>
		<svelte:fragment slot="location">
			<p>Greenville, South Carolina</p>
		</svelte:fragment>
		<svelte:fragment slot="duration">
			<p>January &ndash; December 2015</p>
		</svelte:fragment>
		<ul>
			<li>
				Worked closely with stakeholders to design, develop, and deploy an iOS app for automobile
				inspections saving them 1+ hours a day
			</li>
			<li>
				Assisted Deep Learning research efforts by benchmarking clusters and preparing datasets
			</li>
			<li>Designed &amp; built Raspberry Pi robot for exploring 3D imaging techniques</li>
			<li>Lived and worked in a diverse, multilingual, international environment</li>
		</ul>
	</Work>
</section>

<section id="projects" class="container">
	<h2>Some Things I've Built</h2>
	<section>
		<h3>Featured Projects</h3>
		<Project>
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
		</Project>
		<Project>
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
		</Project>
		<Project>
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
		</Project>
	</section>
	<section>
		<h3>Other Noteworthy Projects</h3>
		<Project>
			<svelte:fragment slot="header">Wedding Website</svelte:fragment>
			<p>
				We're getting married! No better time to learn Svelte + Sapper, lean into a bold design, and
				finally write that tribute to the
				<a href="http://www.firewatchgame.com">Firewatch parallax effect</a>
				like I've always wanted to.
			</p>
			<svelte:fragment slot="technologies">
				<li>Svelte (Sapper, Spring)</li>
			</svelte:fragment>
			<svelte:fragment slot="links">
				<ProjectLinkItem iconType="external" href="https://www.kcdc.fun/" />
				<ProjectLinkItem iconType="github" href="https://github.com/decepulis/kcdc.fun" />
			</svelte:fragment>
		</Project>
		<Project>
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
		</Project>
		<Project>
			<svelte:fragment slot="header">Midwest Microbio</svelte:fragment>
			<p>
				A crazy-minimal marketing website designed and built for a buddy's budding beer business.
			</p>
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
		</Project>
		<Project>
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
		</Project>
		<article>
			<h4>More</h4>
			See so much more, including my graveyard of half-finished projects, on
			<a href="https://github.com/decepulis?tab=repositories">Github</a>
		</article>
	</section>
</section>

<section id="contact" class="container">
	<h2>How to Reach Me</h2>
	<ul>
		<li>
			<IconLink title="Email" href="mailto:hello@decepulis.com">
				<MailIcon size="1x" />
			</IconLink>
		</li>
		<li>
			<IconLink title="GitHub" href="https://github.com/decepulis">
				<GithubIcon size="1x" />
			</IconLink>
		</li>
		<li>
			<IconLink title="LinkedIn" href="https://www.linkedin.com/in/decepulis/">
				<LinkedinIcon size="1x" />
			</IconLink>
		</li>
		<li>
			<IconLink title="Instagram" href="https://www.instagram.com/__dardarbinks/">
				<InstagramIcon size="1x" />
			</IconLink>
		</li>
	</ul>
</section>

<section id="credit" class="container">
	<h2>Credit Where Credit Is Due</h2>
	<dl>
		<dt>Bio Length</dt>
		<dd>
			Thank You <a href="https://chriscoyier.net">Chris Coyier</a>
		</dd>
		<dt>Substantial Structural Inspiration</dt>
		<dd>
			Thank You <a href="https://brittanychiang.com">Brittany Chiang</a>
		</dd>
	</dl>
</section>

<style>
	.eyebrow {
		margin-bottom: 0;
	}
	#hero {
		padding-top: 2rem;
		padding-top: max(env(safe-area-inset-top), 2rem);
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
</style>
