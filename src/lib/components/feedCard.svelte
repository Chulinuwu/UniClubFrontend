<script lang="ts">
	import Profile from './profile.svelte';
	import { formatDistanceToNow } from 'date-fns';
	import { createEventDispatcher } from 'svelte';
	export let feedId = '';
	export let name = '';
	export let header = '';
	export let imageURL = '';
	export let date = '';
	export let className: string = '';
	export { className as class };
	const dispatch = createEventDispatcher();

	function handleClick() {
		dispatch('navigate', { feedId });
	}

	$: truncatedQuote = header.length > 30 ? header.slice(0, 30) + '...' : header;
	$: relativeDate = formatDistanceToNow(new Date(date), { addSuffix: true });
	$: truncatedName = name.length > 12 ? name.slice(0, 12) + '...' : name;
</script>

<button on:click={handleClick}>	
	<div
		class="{className} max-w-[400px] h-[150px] p-3 w-full rounded-md bg-uni-graybox flex justify-between gap-2"
	>
		<div class="flex flex-col justify-between">
			<div class="text-base text-start">{truncatedQuote}</div>
			<div class="flex flex-col text-start">
				<div class="text-sm text-uni-graytext">{relativeDate}</div>
				<div class="text-sm text-uni-graytext">{truncatedName}</div>
			</div>
		</div>

		<Profile
			{imageURL}
			class="bg-white min-w-[120px] min-h-[120px] max-h-[120px] max-w-[120px] w-auto h-auto rounded-md shadow-md"
		/>
	</div>
</button>
