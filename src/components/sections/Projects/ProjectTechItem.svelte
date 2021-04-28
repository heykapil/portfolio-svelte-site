<li>
	<slot />
	<!-- <span class="small"><slot name="details" /></span> -->
</li>

<style>
	li {
		display: inline;
		font-style: italic;
	}
	li:not(:last-of-type):after {
		content: ', ';
	}
</style>
