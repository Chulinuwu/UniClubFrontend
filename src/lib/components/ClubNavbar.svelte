<script lang="ts">
	import back from '../icon/back.svg';
	import uniclub from '../images/uniclub.png';
	import strokeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';

	let isHeartFull = false;

	function toggleHeart() {
		isHeartFull = !isHeartFull;
	}
</script>

<div class="w-full h-[100px] p-5 fixed bg-white flex items-center justify-between">
	<div class="flex h-[40px]"><img src={back} alt="back" /></div>
	<div class="flex h-[50px]"><img src={uniclub} alt="uniclub" /></div>
	<div class="flex h-[50px]">
		<button on:click={toggleHeart} class="cursor-pointer">
			<img
				src={isHeartFull ? fullheart : strokeheart}
				alt={isHeartFull ? 'full heart' : 'stroke heart'}
			/></button
		>
	</div>
</div>
