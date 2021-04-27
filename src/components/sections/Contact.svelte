<script lang="ts">
	import { MailIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'svelte-feather-icons';
	import IconLink from '../../components/IconLink.svelte';
</script>

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
