<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/Uniclub.png';
	import notification from '../icon/notification.svg';
	import { goto } from '$app/navigation';
</script>

<div class="w-full h-[100px] p-5 fixed z-50  bg-white flex items-center justify-between">
	<button on:click={() => history.back()} class="flex h-[40px]"
		><img src={back} alt="back" /></button
	>
	<!-- <div class="flex h-[50px]"><img src={uniclub} alt="uniclub" /></div> -->
	<div class="flex h-[40px] min-w-10"><img src={notification} alt="notification" /></div>
</div>
