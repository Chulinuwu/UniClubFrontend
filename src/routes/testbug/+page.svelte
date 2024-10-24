<script context="module" lang="ts">
	import { load } from './+page';

	export { load } from './+page';
	console.log(load);
</script>

<script lang="ts">
	export let message: string;
</script>

<main>
	<h1>{message}</h1>
</main>
