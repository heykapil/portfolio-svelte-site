<script lang="ts">
	import { onMount } from 'svelte';

	import ModeToggles from '../ModeToggles.svelte';

	let menuOpen = false;
	const closeMenu = () => (menuOpen = false);

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'work', label: 'Work' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'contact', label: 'Contact' },
		{ id: 'credit', label: 'Credit' }
	];
	let sectionObservations: { [id: string]: number } = {};

	$: currentSectionId = Object.entries(sectionObservations).reduce(
		(current, [id, observation]) =>
			current.observation < observation ? { id, observation } : current,
		{ id: null, observation: 0 }
	).id;

	onMount(() => {
		if (typeof IntersectionObserver === 'undefined') {
			return;
		}

		const observerConfig: IntersectionObserverInit = {
			root: null,
			threshold: [0, 0.25, 0.5, 0.75, 1]
		};
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				({ target, intersectionRatio }) =>
					(sectionObservations = {
						...sectionObservations,
						[target.getAttribute('id')]: intersectionRatio
					})
			);
		}, observerConfig);

		sections.forEach(({ id }) => {
			observer.observe(document.querySelector(`#${id}`));
		});

		return () => observer.disconnect();
	});
</script>

<nav class="full-bleed">
	<a href="#hero">DC</a>
	<input
		class="menu-toggle"
		type="checkbox"
		bind:checked={menuOpen}
		title="Toggle Menu"
		aria-label="Toggle Menu"
	/>
	<div class="menu">
		{#each sections as { id, label }}
			<a
				on:click={closeMenu}
				href="#{id}"
				aria-current={currentSectionId === id ? 'section' : undefined}
			>
				{label}
			</a>
		{/each}
		<ModeToggles />
	</div>
</nav>

<style>
	nav {
		position: sticky;
		z-index: 1;
		top: 0;
		padding-bottom: 0;
		background-color: rgb(var(--bg));
		transition: background-color var(--transition-speed-medium);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.menu-toggle {
		display: none;
	}
	.menu {
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	a {
		text-decoration: none;
	}
	a,
	.menu :global(.toggles) {
		padding: 0.5rem 1rem;
	}
	.menu :global(.toggles) {
		margin-left: auto;
		padding-right: 0;
	}
	@media (max-width: 42rem) {
		.menu {
			position: absolute;
			z-index: 10;
			background-color: rgb(var(--bg));
			border: var(--border-width) solid rgba(var(--text), 0.5);
			top: calc(var(--main-padding) / 2);
			left: calc(var(--main-padding) / 2);
			right: calc(var(--main-padding) / 2);
			border-radius: 1rem;
			padding: var(--main-padding);
			display: flex;
			flex-direction: column;
			align-items: center;
			transform: scale(0.85);
			pointer-events: none;
			opacity: 0;
			transform-origin: calc(100% - 1rem) 1rem;
			transition: background-color var(--transition-speed-medium),
				color var(--transition-speed-medium), transform var(--transition-speed-medium),
				opacity var(--transition-speed-medium);
		}
		.menu-toggle {
			display: block;
			position: relative;
			width: 2rem;
			height: 2rem;
			margin: 0;
			z-index: 11;
			-webkit-appearance: none;
			appearance: none;
			border: 0;
		}
		.menu-toggle:before,
		.menu-toggle:after {
			content: '';
			background-color: rgb(var(--text));
			position: absolute;
			height: 0.15rem;
			border-radius: var(--border-width);
			left: 0;
			right: 0;
			transition: transform var(--transition-speed-medium);
		}
		.menu-toggle:before {
			top: calc(2rem / 3 - 0.075rem);
		}
		.menu-toggle:after {
			bottom: calc(2rem / 3 - 0.075rem);
		}
		.menu-toggle:checked:before {
			transform: translateX(-0.5rem) translateY(calc(2rem / 6 + 1rem)) rotateZ(135deg);
		}
		.menu-toggle:checked:after {
			transform: translateX(-0.5rem) translateY(calc(-2rem / 6 + 1rem)) rotateZ(45deg);
		}
		.menu-toggle:checked ~ .menu {
			opacity: 1;
			transform: scale(1);
			pointer-events: auto;
		}

		.menu :global(.toggles) {
			margin-left: 0;
		}
	}

	/* Links */
	[href='#hero'] {
		font-family: var(--header-font-family);
		font-weight: var(--header-font-weight);
	}
</style>
