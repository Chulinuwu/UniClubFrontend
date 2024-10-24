<script lang="ts">
	import Topnavbar from '$lib/components/Topnavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import ClubCard from '$lib/components/clubCard.svelte';
	import FeedCard from '$lib/components/feedCard.svelte';
	import { goto } from '$app/navigation';

	export let data;
	const { clubsFav, feedsFav } = data;

	// State to track the active section: 'club' or 'activity'
	let activeSection = 'club';

	// Fetch clubsFav by default
	let memos = clubsFav;

	function handleNavigate(event: any) {
		const { clubId } = event.detail;
		goto(`/clubs/${clubId}`);
	}

	function handleNavigate2(event: any) {
		const { feedId } = event.detail;
		goto(`/activity/${feedId}`);
		// console.log(feedId);
	}

	// Function to handle tab switching
	function handleTabClick(section: string) {
		activeSection = section;
		if (section === 'club') {
			memos = clubsFav;
		} else if (section === 'activity') {
			memos = feedsFav;
		}
	}
</script>

<div class="w-full h-full">
	<Topnavbar />
	<div class="w-full h-[100px]"></div>
	<!-- Section switcher for Club and Activity -->
	<div class="w-full h-auto  flex justify-between px-12 items-center text-center gap-5">
		<button
			class={`cursor-pointer ${activeSection === 'club' ? 'text-uni-red font-bold underline-offset-2' : ''}`}
			on:click={() => handleTabClick('club')}
		>
			Club
		</button>
		<button
			class={`cursor-pointer ${activeSection === 'activity' ? 'text-uni-red font-bold underline-offset-2' : ''}`}
			on:click={() => handleTabClick('activity')}
		>
			Activity
		</button>
	</div>

	<!-- Render data based on the active section -->
	<div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px]">
		{#if activeSection === 'activity'}
			{#each memos as memo}
				<FeedCard on:navigate={handleNavigate2}
				feedId={memo.feedId} date={memo.date} imageURL={memo.imageURL} name={memo.name} header={memo.header} />
			{/each}
		{/if}
		{#if activeSection === 'club'}
			{#each memos as memo}
				<ClubCard
					clubId={memo.clubId}
					name={memo.name}
					quote={memo.header}
					imageURL={memo.imageURL}
					on:navigate={handleNavigate}
				/>
			{/each}
		{/if}
	</div>

	<BottomNavbar />
</div>
