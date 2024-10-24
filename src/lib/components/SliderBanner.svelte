<script lang="ts">
	import LeftArrow from '../icon/whiteLeftArrow.svg';
	import RightArrow from '../icon/whiteRightArrow.svg';
	export let images: string[] = [];
	let currentIndex = 0;

	function handleLeftClick() {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
		scrollToImage();
	}

	function handleRightClick() {
		currentIndex = (currentIndex + 1) % images.length;
		scrollToImage();
	}

	function scrollToImage() {
		const container = document.querySelector('.image-container');
		if (container) {
			const imageWidth = container.clientWidth;
			container.scrollTo({
				left: imageWidth * currentIndex,
				behavior: 'smooth'
			});
		}
	}

	function goToSlide(index: number) {
		currentIndex = index;
		scrollToImage();
	}
</script>

<div>
	<div class="w-full h-[100px]"></div>
	<div class="relative flex w-full h-[256px] ">
		<button
			class="absolute left-5 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer transition-all"
			on:click={handleLeftClick}
		>
			<img src={LeftArrow} alt="Left Arrow" />
		</button>
		<div
			class="relative w-full h-[256px] flex overflow-hidden image-container snap-x snap-mandatory"
		>
			{#each images as img}
				<div class="w-full h-full flex-shrink-0 snap-center">
					<img src={img} alt="pic" class="w-full h-full object-cover" />
				</div>
			{/each}
		</div>
		<button
			class="absolute right-5 top-1/2  transform -translate-y-1/2 z-10 cursor-pointer transition-all"
			on:click={handleRightClick}
		>
			<img src={RightArrow} alt="Right Arrow" />
		</button>
	</div>
	<div class="flex justify-center space-x-2 mt-3">
		{#each images as _, index}
			<button
				class="w-1.5 h-1.5 rounded-full cursor-pointer transition-all"
				class:bg-uni-red={index === currentIndex}
				class:bg-uni-graytext2={index !== currentIndex}
				on:click={() => goToSlide(index)}
			></button>
		{/each}
	</div>
</div>
