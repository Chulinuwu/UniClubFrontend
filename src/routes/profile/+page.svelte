<script lang="ts">
	import ProfileNavbar from '$lib/components/profileNavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import ClubCard from '$lib/components/clubCard.svelte';
	import Profile from '../../lib/images/profile2.jpg';
	import { goto } from '$app/navigation';

	export let data;
	const { user } = data;

	function handleNavigate(event : any) {
        const { clubId } = event.detail;
        goto(`profile/${clubId}`);
    }
</script>

{#if user}
<div class="w-full h-full">
	<ProfileNavbar />
	<div class="h-[100px]"></div>
	<div class="p-5 gap-4 flex flex-col w-full h-full min-h-[100vh] items-center mb-[100px]">
		<div class=" w-[100px] h-[100px]">
				<img src={user.imageURL} alt="profile" class="rounded-full" />
		</div>
		<div class="gap-2 text-center">
			<div class="text-black text-2xl">
				{user.name}
			</div>
			<div class="text-uni-graytext gap-0.5 text-lg">
				<div>
					{user.userId}
				</div>
				<div>
					{user.faculty}
				</div>
			</div>
		</div>
		<div class="flex w-1/2 h-0.5 bg-uni-red"></div>
		<div class="text-lg">Your clubs:</div>
		<div class="flex flex-col gap-2.5">
			{#each user.clubs as club}
			<ClubCard clubId={club.clubId} name={club.clubName} quote={club.clubDescription} imageURL={Profile} on:navigate={handleNavigate} />
			{/each}
		</div>
	</div>
	<BottomNavbar />
</div>
{/if}
