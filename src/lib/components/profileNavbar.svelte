<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/Uniclub.png';
	import notification from '../icon/notification.svg';
	import { goto } from '$app/navigation';
	import strokeNotification from '../icon/strokeNotification.svg';
	import { onMount } from 'svelte';

	let currentPath = '';
	let showNotification = false;
	onMount(() => {
		currentPath = window.location.pathname;
		showNotification = currentPath === '/notification';
	});
</script>

<div class="w-full h-[100px] p-5 fixed z-50  bg-white flex items-center justify-between">
	<button on:click={() => history.back()} class="flex h-[40px]"
		><img src={back} alt="back" /></button
	>
	<!-- <div class="flex h-[50px]"><img src={uniclub} alt="uniclub" /></div> -->
	{#if showNotification}
	<div class="flex w-[40px] h-[50px] min-w-7 max-w-7">
	<button on:click={()=>history.back()}>
		<img src={strokeNotification} alt="notification" class="min-h-[40px]"/>
	</button>
	</div>
	{:else}
		<a href="/notification" class="flex h-[40px] min-h-[px] min-w-8 max-w-8 items-center justify-center">
			<img src={notification} alt="notification" class="min-h-[40px]"/>
		</a>
	{/if}
</div>
