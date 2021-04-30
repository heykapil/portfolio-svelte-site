<li>
	<span class="visually-hidden"><slot name="details" /></span>
	<slot />
</li>

<style>
	li {
		display: inline;
		font-style: italic;
	}
	li:not(:last-of-type):after {
		content: ',';
	}
</style>
