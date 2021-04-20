<script lang="ts">
	type Length = 'short' | 'medium' | 'long';

	export let defaultLength: Length = 'long';
	let length: Length = defaultLength;
</script>

<form>
	<fieldset>
		<legend><slot name="legend">Length</slot></legend>
		<label>
			<input type="radio" bind:group={length} value="short" />
			Short
		</label>
		<label>
			<input type="radio" bind:group={length} value="medium" />
			Medium
		</label>
		<label>
			<input type="radio" bind:group={length} value="long" />
			Long
		</label>
	</fieldset>
</form>

{#if length === 'short'}
	<slot name="short" />
{:else if length === 'medium'}
	<slot name="medium" />
{:else}
	<slot name="long" />
{/if}
