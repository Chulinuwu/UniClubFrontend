<script lang="ts">
	import notification from '../icon/notification.svg';
	import uniclub from '../images/Uniclub.png';
	import { goto } from '$app/navigation';
</script>

<div class="w-full h-[100px] z-50 p-5 fixed bg-white flex items-center justify-between">
	<div class=" flex h-[50px]"><img src={uniclub} alt="uniclub" /></div>
	<a href="/notification" class="flex h-[40px] min-h-[px] min-w-8 max-w-8 items-center justify-center"><img src={notification} alt="notification" class="min-h-[40px]"/></a>
</div>
