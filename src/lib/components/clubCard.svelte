<script lang="ts">
	import Profile from './profile.svelte';
	import { createEventDispatcher } from 'svelte';
	export let clubId='';
	export let name = '';
	export let quote = '';
	export let imageURL = '';
	export let className: string = '';
	export { className as class };
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('navigate', { clubId });
	}
	$: truncatedQuote = quote.length > 24 ? quote.slice(0, 24) + '...' : quote;

	$: truncatedName = name.length > 13 ? name.slice(0, 13) + '...' : name;
</script>

<button class="{className} max-w-[400px] h-[100px] p-2 w-full rounded-md bg-uni-graybox flex gap-3" on:click={handleClick}>
	<Profile
		{imageURL}
		class="bg-white w-[80px] h-[80px] min-w-[80px] rounded p-2 shadow-md"
	/>
	<div class="flex flex-col justify-start w-full text-left">
		<div class="text-base">{truncatedName}</div>
		<div class="text-xs text-uni-graytext">{truncatedQuote}</div>
	</div>
</button>
