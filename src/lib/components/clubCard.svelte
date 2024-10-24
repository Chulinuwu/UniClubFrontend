<script lang="ts">
	import Profile from './profile.svelte';
	import { createEventDispatcher } from 'svelte';
	export let clubId = '';
	export let name = '';
	export let quote = '';
	export let imageURL = '';
	export let className: string = '';
	export { className as class };
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('navigate', { clubId });
	}
	$: truncatedQuote = quote.length > 40 ? quote.slice(0, 40) + '...' : quote;
</script>

<button
	class="{className} w-[380px] max-w-[380px] h-[100px] p-2  rounded-md bg-uni-graybox flex gap-3"
	on:click={handleClick}
>
	<Profile {imageURL} class="bg-white w-[80px] h-[80px] min-w-[80px] rounded p-2 shadow-md" />
	<div class="flex flex-col justify-start w-full text-left">
		<div class="text-base">{name}</div>
		<div class="text-xs text-uni-graytext">{truncatedQuote}</div>
	</div>
</button>
