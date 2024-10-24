<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/uniclub.png';
	import strokeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';
	import { goto } from '$app/navigation';

	let isHeartFull = false;

	function toggleHeart() {
		isHeartFull = !isHeartFull;
	}

	function navigateBack() {
        history.back(); 
    }
</script>

<div class="w-full h-[100px] z-50 p-5 fixed bg-white flex items-center justify-between">
	<button on:click={navigateBack} class="flex h-[40px] items-center"><img src={back} alt="back" /></button>
	<div class="flex h-[50px]"><img src={uniclub} alt="uniclub" /></div>
	<div class="flex w-[40px] h-[50px]">
		<button on:click={toggleHeart} class="cursor-pointer">
			<img
				src={isHeartFull ? fullheart : strokeheart}
				alt={isHeartFull ? 'full heart' : 'stroke heart'}
			/></button
		>
	</div>
</div>
