<script lang="ts">
	import notification from '../icon/notification.svg';
	import strokeNotification from '../icon/strokeNotification.svg';
	import uniclub from '../images/Uniclub.png';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	let currentPath = '';
	let showNotification = false;
	onMount(() => {
		currentPath = window.location.pathname;
		showNotification = currentPath === '/notification';
	});
</script>

<div class="w-full h-[100px] z-50 p-5 fixed bg-white flex items-center justify-between">
	<div class=" flex h-[50px]"><img src={uniclub} alt="uniclub" /></div>
	{#if showNotification}
		<img src={strokeNotification} alt="notification" class="min-h-[40px]"/>
	{:else}
		<a href="/notification" class="flex h-[40px] min-h-[px] min-w-8 max-w-8 items-center justify-center">
			<img src={notification} alt="notification" class="min-h-[40px]"/>
		</a>
	{/if}
</div>
