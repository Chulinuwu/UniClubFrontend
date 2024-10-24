<script lang="ts">
	import ClubNavbar from '$lib/components/ClubNavbar.svelte';
	import clubbg from '../../../lib/images/clubbg.png';
	import TabClub from '$lib/components/tabClub.svelte';
    import FeedCard from '$lib/components/feedCard.svelte';

	let selectedItem = 'Info';
	export let data;
	const { club } = data;

	function handleSelect(item: string) {
		selectedItem = item;
		console.log('Selected item:', item);
	}

</script>

<ClubNavbar />

{#if club}
	<div class="w-full min-h-[100vh] flex flex-col items-center justify-center">
		<div class="flex w-full h-[100px]"></div>
		<div class="flex w-full h-[256px] mb-[10px]">
			<img src={clubbg} alt="clubbg" class="w-full h-full object-cover" />
		</div>
		<div class="absolute top-52 w-full flex justify-center mb-[10px]">
			<img
				src={club.imageURL}
				alt={club.name}
				class="w-60 max-w-[240px] max-h-[240px] h-60 object-cover shadow-lg rounded-xl"
			/>
		</div>
		<div class="flex flex-col mb-[10px] w-full h-auto text-center items-center mt-28">
			<h1 class="text-xl font-bold text-black">{club.name}</h1>
			<p class="text-base text-uni-graytext">{club.header}</p>
			<div class="flex w-1/2 h-0.5 mt-4 bg-uni-red"></div>
		</div>
		<TabClub onSelect={handleSelect} />
		{#if selectedItem === 'Info'}
			<p class="p-5 mt-1">{club.info}</p>
		{/if}
		{#if selectedItem === 'Activity'}
        {#each club.activity as activity (activity.clubId)}
        <div class="p-5 mt-1">
            <FeedCard
            name={activity.name}
            header={activity.header}
            imageURL={activity.imageURL}
            date={activity.date}
        />
        </div>
    {/each}
		{/if}
		{#if selectedItem === 'Contacts'}
			<p class="p-5 mt-1">Contacts content goes here</p>
		{/if}
		<div class="flex mt-10"></div>
		<div class="flex mt-10"></div>
		<div class="flex mt-10 mb-15 gap-2">
			<div
				class="w-auto p-1 h-auto px-2 rounded-full bg-white border-uni-red border-2 text-uni-red"
			>
				{club.tags.category}
			</div>
			<div
				class="w-auto p-1 h-auto px-2 rounded-full bg-white border-uni-red border-2 text-uni-red"
			>
				{club.tags.type}
			</div>
			<div
				class="w-auto p-1 h-auto px-2 rounded-full bg-white border-uni-red border-2 text-uni-red"
			>
				{club.tags.status}
			</div>
		</div>
		<div class="w-full h-[100px] max-w-[100vw] p-5 bottom-0 flex items-center justify-between">
			{#if club.tags.status === 'Open'}
				<a
					href="https://www.youtube.com/watch?v=AdHps0Mizdk"
					about="_blank"
					class="w-full h-full bg-uni-red rounded-full flex justify-center items-center text-white"
				>
					Join
				</a>
			{:else if club.tags.status === 'Closed'}
				<div
					class="w-full h-full bg-gray-400 rounded-full flex justify-center items-center text-white"
				>
					Unavailable to join
				</div>
			{/if}
		</div>
	</div>
{/if}
