<script lang="ts">
	import { onMount } from 'svelte';
	import Home from '../icon/homeicon.svg';
	import Homeblack from '../icon/homeblack.svg';
	import Search from '../icon/search.svg';
	import searchblack from '../icon/searchblack.svg';
	import fullheart from '../icon/fullheart.svg';
	import strokeheartblack from '../icon/strokeheartblack.svg';
	import Profile from './profile.svelte';
	import profile1 from '../images/profile1.png';

	let isHeartFull = false;
	let currentPath = '';
	let showHomeIcon = false;
	let showSearchIcon = false;
	let showHeartIcon = false;
	let showProfileIcon = false;

	// Use onMount to ensure this code runs only on the client side
	onMount(() => {
		currentPath = window.location.pathname;
		showHomeIcon = currentPath === '/dashboard';
		showSearchIcon = currentPath === '/search';
		showHeartIcon = currentPath === '/favorites';
		showProfileIcon = currentPath === '/profile';
	});
</script>

<div
	class="w-full h-[100px] max-w-[100vw] p-5 fixed bottom-0 bg-white flex items-center justify-between"
>
	<div class="flex h-[25px]">
		{#if showHomeIcon}
			<img src={Home} alt="home" class="max-w-[25px]" />
		{:else}
			<a href="/dashboard" class="max-w-[25px]">
				<img src={Homeblack} alt="homeblack" />
			</a>
		{/if}
	</div>
	<div class="flex h-[25px]">
		{#if showSearchIcon}
			<img src={Search} alt="search" class="max-w-[25px]" />
		{:else}
			<a href="/search" class="max-w-[25px]"> <img src={searchblack} alt="searchblack" /></a>
		{/if}
	</div>
	<div class="flex h-[25px]">
		{#if showHeartIcon}
			<img src={fullheart} alt="fullheart" class="max-w-[25px]" />
		{:else}
			<a href="/favorites" class="max-w-[25px]">
				<img src={strokeheartblack} alt="strokeheart" />
			</a>
		{/if}
	</div>
	<div class="flex h-[25px]">
		{#if showProfileIcon}
			<Profile
				imageURL={profile1}
				class="w-auto h-auto max-w-[25px] rounded-full {showProfileIcon ? 'border border-uni-red' : ''}"
			/>
		{:else}
			<a href="/profile">
				<Profile
					imageURL={profile1}
					class="w-auto h-auto  max-w-[25px] rounded-full {showProfileIcon ? 'border border-uni-red' : ''}"
				/>
			</a>
		{/if}
	</div>
</div>
