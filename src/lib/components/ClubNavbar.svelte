<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/Uniclub.png';
	import strokeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/store/userStore';
	import { insertFavoriteClubOfUser } from '$lib/store/userStore';
	import { removeFavoriteClubOfUser } from '$lib/store/userStore'

	let isHeartFull = false;

	export let clubId: string | undefined; // Accept clubId as a prop
	console.log("clubId from ClubNavbar:", clubId); // You can use clubId here
	// Check if the club is already favorited
	if (clubId != undefined) {
		isHeartFull = $userStore[0].clubsFav.includes(clubId);
	}

	function toggleHeart() {
		isHeartFull = !isHeartFull;
		
		if (clubId != undefined) {
			// You can also make an API call to update the favorite status
			if (isHeartFull) {
				// Add to favorites
				insertFavoriteClubOfUser($userStore[0].userId, clubId);
			} else {
				// Remove from favorites
				removeFavoriteClubOfUser($userStore[0].userId, clubId);
			}
		}
	}

	function navigateBack() {
		history.back();
	}
</script>

<div class="w-full h-[100px] z-50 p-5 fixed bg-white flex items-center justify-between">
	<button on:click={navigateBack} class="flex h-[40px] min-w-10 items-center"
		><img src={back} alt="back" /></button
	>
	<!-- <div class="flex h-[50px] min-w-10"><img src={uniclub} alt="uniclub" /></div> -->
	<div class="flex w-[40px] h-[50px] min-w-10">
		<button on:click={toggleHeart} class="cursor-pointer">
			<img
				src={isHeartFull ? fullheart : strokeheart}
				alt={isHeartFull ? 'full heart' : 'stroke heart'}
			/></button
		>
	</div>
</div>
