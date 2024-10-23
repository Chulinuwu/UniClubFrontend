<script type="ts">
	import Topnavbar from '$lib/components/Topnavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import FeedCard from '$lib/components/feedCard.svelte';
	import { feedMemos } from '$lib/mock/feedmemos';
	import SliderBanner from '$lib/components/SliderBanner.svelte';

	import img1 from '../../lib/images/imageSlider1.png';
	import img2 from '../../lib/images/imageSlider2.png';
	import img3 from '../../lib/images/imageSlider3.png';

	let images = [img1, img2, img3];
</script>

<div class="w-full h-full">
	<Topnavbar  />
	<SliderBanner {images} />
	<div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px]">
		{#each feedMemos as memo}
			<FeedCard date={memo.date} imageURL={memo.imageURL} name={memo.name} header={memo.header} />
		{/each}
	</div>
	<BottomNavbar />
</div>
