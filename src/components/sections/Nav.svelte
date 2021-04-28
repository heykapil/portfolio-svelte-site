<script lang="ts">
	import { SunIcon, MoonIcon } from 'svelte-feather-icons';
	import { slide } from 'svelte/transition';

	let darkMode = false;
	let altMode = false;
	let menuOpen = false;

	$: {
		if (typeof document === 'undefined') break $;
		if (darkMode) {
			document.body.classList.add('dark');
		} else {
			document.body.classList.remove('dark');
		}
	}
	$: {
		if (typeof document === 'undefined') break $;
		if (altMode) {
			document.body.classList.add('alt');
		} else {
			document.body.classList.remove('alt');
		}
	}

	const closeMenu = () => (menuOpen = false);
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
		<a on:click={closeMenu} href="#about">About</a>
		<a on:click={closeMenu} href="#work">Work</a>
		<a on:click={closeMenu} href="#projects">Projects</a>
		<a on:click={closeMenu} href="#contact">Contact</a>
		<a on:click={closeMenu} href="#credit">Credit</a>
		<div class="toggles">
			<label>
				<input
					class="mode-toggle"
					type="checkbox"
					bind:checked={darkMode}
					title="Toggle Dark Mode"
				/>
				{#if darkMode}
					<div class="transition" transition:slide><MoonIcon size="1.5x" /></div>
				{:else}
					<div class="transition" transition:slide><SunIcon size="1.5x" /></div>
				{/if}
				<span class="visually-hidden">Dark Mode</span>
			</label>
			<label class="alt-toggle" class:checked={altMode} title="Toggle Alternate Color Mode">
				<input class="mode-toggle" type="checkbox" bind:checked={altMode} />
				<span class="visually-hidden">Alternate Color Mode</span>
			</label>
		</div>
	</div>
</nav>

<style>
	nav {
		position: sticky;
		z-index: 1;
		top: 0;
		padding: 0 1rem;
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
	a,
	.toggles {
		padding: 1rem 0.5rem;
	}
	.toggles {
		margin-left: auto;
	}
	@media (max-width: 42rem) {
		nav {
			padding: 0 1.5rem;
		}
		.menu {
			position: absolute;
			z-index: 10;
			background-color: rgb(var(--bg));
			border: 0.1rem solid rgb(var(--c5));
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
			width: 1rem;
			height: 1rem;
			margin: 0;
			z-index: 11;
			-webkit-appearance: none;
			appearance: none;
		}
		.menu-toggle:before,
		.menu-toggle:after {
			content: '';
			background-color: rgb(var(--text));
			position: absolute;
			height: 0.15rem;
			border-radius: 0.1rem;
			left: 0;
			right: 0;
			transition: transform var(--transition-speed-medium);
		}
		.menu-toggle:before {
			top: calc(1rem / 3 - 0.075rem);
		}
		.menu-toggle:after {
			bottom: calc(1rem / 3 - 0.075rem);
		}
		.menu-toggle:checked:before {
			transform: translateY(calc(1rem / 6)) rotateZ(135deg);
		}
		.menu-toggle:checked:after {
			transform: translateY(calc(-1rem / 6)) rotateZ(45deg);
		}
		.menu-toggle:checked ~ .menu {
			opacity: 1;
			transform: scale(1);
			pointer-events: auto;
		}
		.toggles {
			margin-left: 0;
		}
	}

	/* Links */
	[href='#hero'] {
		font-family: var(--header-font-family);
		font-weight: var(--header-font-weight);
	}

	/* toggles */
	.mode-toggle {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
	.toggles {
		display: flex;
		--toggle-height: 24px;
		--toggle-stroke: 0.1rem;
	}
	label {
		cursor: pointer;
	}
	label:not(.alt-toggle) {
		margin-right: 0.5rem;
	}
	label :global(svg) {
		vertical-align: -0.125em;
		stroke-width: var(--toggle-stroke);
	}
	.alt-toggle {
		height: var(--toggle-height);
		width: 36px;
		border-radius: var(--toggle-height);
		border-width: var(--toggle-stroke);
		border-style: solid;
		border-color: rgb(var(--text));
		transition: border-color var(--transition-speed-medium);
		position: relative;
	}
	.alt-toggle:after {
		content: '';
		position: absolute;
		z-index: 1;
		width: calc(var(--toggle-height) - 4 * var(--toggle-stroke));
		height: calc(var(--toggle-height) - 4 * var(--toggle-stroke));
		border-radius: 50%;
		background-color: rgb(var(--c5));
		transition: background-color var(--transition-speed-medium),
			transform var(--transition-speed-medium);
		left: var(--toggle-stroke);
		top: var(--toggle-stroke);
	}
	.alt-toggle.checked:after {
		transform: translateX(calc(100% - 3 * var(--toggle-stroke)));
	}
</style>
