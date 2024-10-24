<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/Uniclub.png';
	import strokeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';
	import { goto } from '$app/navigation';
	import { userStore } from '$lib/store/userStore';
	import { insertFavoriteClubOfUser } from '$lib/store/userStore';
	import { removeFavoriteClubOfUser } from '$lib/store/userStore'
	import { insertFavoriteFeedOfUser } from '$lib/store/userStore';
	import { removeFavoriteFeedOfUser } from '$lib/store/userStore';

	export let id: string | undefined;  // This can be either clubId or feedId
    export let type: 'club' | 'feed'; // Indicates the type (club or feed)
	let isHeartFull = false;

	// Load initial state to check if this club or feed is already favorited
    $: if (type === 'club') {
        // Check if the club is already favorited
		if (id != undefined) {
			isHeartFull = $userStore[0].clubsFav.includes(id);
		}
    } else if (type === 'feed') {
        // Check if the feed is already favorited
		if (id != undefined) {
			isHeartFull = $userStore[0].feedsFav.includes(id);
		}
    }

	function toggleHeart() {
		isHeartFull = !isHeartFull;
		
		if (id != undefined) {
			if (isHeartFull) {
				if (type === 'club') {
					insertFavoriteClubOfUser($userStore[0].userId, id); // Add the club to favorites
				} else if (type === 'feed') {
					insertFavoriteFeedOfUser($userStore[0].userId, id); // Add the feed to favorites
				}
			} else {
				if (type === 'club') {
					removeFavoriteClubOfUser($userStore[0].userId, id); // Remove the club from favorites
				} else if (type === 'feed') {
					removeFavoriteFeedOfUser($userStore[0].userId, id); // Remove the feed from favorites
				}
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
	<div class="flex w-[40px] h-[50px] min-w-7 max-w-7">
		<button on:click={toggleHeart} class="cursor-pointer">
			<img
				src={isHeartFull ? fullheart : strokeheart}
				alt={isHeartFull ? 'full heart' : 'stroke heart'}
			/></button
		>
	</div>
</div>
