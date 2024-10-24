<script lang="ts">
	import ClubNavbar from '$lib/components/ClubNavbar.svelte';
	import clubbg from '../../../lib/images/clubbg.png';
	import TabClub from '$lib/components/tabClub.svelte';
	import FeedCard from '$lib/components/feedCard.svelte';
	import ig from '$lib/icon/ig.svg';
	import facebook from '$lib/icon/facebook.svg';
	import line from '$lib/icon/line.svg';
	import SliderBanner from '$lib/components/SliderBanner.svelte';
    import img1 from '../../../lib/images/imageSlider1.png';
    import img2 from '../../../lib/images/imageSlider3.png';
    import img3 from '../../../lib/images/imageSlider2.png';

	let images = [img1, img2, img3];

	export let data;
	const { feed } = data;
	console.log(feed);
</script>

<ClubNavbar id={feed?.feed.feedId} type={'feed'}/>

{#if feed}
	<div class="w-full min-h-[100vh]">
        <SliderBanner {images} />
        <div class="flex flex-col w-full h-auto text-center items-center"></div>
        <div class="p-5 flex flex-col w-full items-center mb-[100px]">
            <h1 class="text-3xl font-bold text-red-500">{feed.feed.header}</h1>
            <h4 class="text-m font-bold text-black mt-3">{feed.name}</h4>
            <h4 class="text-m font-bold text-black">{feed.feed.date} at my home</h4>
            <p class="text-sm font-blod text-gray-400 w-full mt-3">{feed.feed.detail}</p>
        </div>
	</div>
{/if}
