<script lang="ts">
	import { slide } from 'svelte/transition';

	type Length = 'short' | 'medium' | 'long';

	export let defaultLength: Length = 'long';
	let length: Length = defaultLength;
</script>

<form class="small">
	<fieldset class={length}>
		<label>
			<input type="radio" bind:group={length} value="short" />
			<span>Short</span>
		</label>
		<label>
			<input type="radio" bind:group={length} value="medium" />
			<span>Medium</span>
		</label>
		<label>
			<input type="radio" bind:group={length} value="long" />
			<span>Long</span>
		</label>
	</fieldset>
</form>

{#if length === 'short'}
	<div transition:slide>
		<slot name="short" />
	</div>
{:else if length === 'medium'}
	<div transition:slide>
		<slot name="medium" />
	</div>
{:else}
	<div transition:slide>
		<slot name="long" />
	</div>
{/if}

<style>
	form {
		margin-bottom: 1rem;
	}
	fieldset {
		overflow: hidden;
		padding: 0;
		border: 0;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: stretch;
		justify-items: stretch;

		position: relative;
	}
	fieldset:before,
	fieldset:after,
	label:after {
		height: 0.25em;
		border-radius: 0.125em;
		left: 0;
		bottom: 0;
	}
	fieldset:before {
		/* track */
		content: '';
		position: absolute;
		width: 100%;
		background-color: rgb(var(--c1));
	}
	fieldset:after {
		/* highlight */
		content: '';
		position: absolute;
		width: calc(100% / 3);
		background-color: rgb(var(--c2));
		transition: transform 0.4s;
	}
	fieldset.short:after {
		transform: translateX(0%);
	}
	fieldset.medium:after {
		transform: translateX(100%);
	}
	fieldset.long:after {
		transform: translateX(200%);
	}
	label {
		text-align: center;
		cursor: pointer;
		padding: 0.5em;
		position: relative;
	}
	label:after {
		content: '';
		position: absolute;
		width: 100%;
		transition: background-color 0.1s;
	}
	label:hover:after {
		background-color: rgba(var(--c2), 0.5);
	}
	[type='radio'] {
		border: 0;
		clip: rect(0 0 0 0);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
	}
	/* [type='radio']:checked + span {
		color: rgb(var(--light));
	} */

	div > :global(p:first-child) {
		margin-top: 0;
	}
	div > :global(p:last-child) {
		margin-bottom: 0;
	}
</style>
