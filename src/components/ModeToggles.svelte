<script lang="ts">
	import { onMount } from 'svelte';
	import { slide } from 'svelte/transition';

	import { SunIcon, MoonIcon } from 'svelte-feather-icons';

	let listenerInitialized = false;
	let darkMode = false;
	let altMode = false;

	$: {
		if (typeof document === 'undefined') break $;
		if (!listenerInitialized) break $;

		if (darkMode) {
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		} else {
			document.body.classList.remove('dark');
			document.body.classList.add('light');
		}
	}
	$: {
		if (typeof document === 'undefined') break $;
		if (altMode) {
			document.body.classList.add('alt');
			document.body.classList.remove('primary');
		} else {
			document.body.classList.remove('alt');
			document.body.classList.add('primary');
		}
	}

	onMount(() => {
		// A listener to respond to system color changes
		const onDarkModeChange = (e: MediaQueryListEvent) => (darkMode = e.matches);
		const darkModeMatch = window.matchMedia('(prefers-color-scheme: dark)');
		darkMode = darkModeMatch.matches;
		darkModeMatch.addEventListener('change', onDarkModeChange);
		listenerInitialized = true;
	});
</script>

<div class="toggles">
	<label>
		<input class="mode-toggle" type="checkbox" bind:checked={darkMode} title="Toggle Dark Mode" />
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

<style>
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
