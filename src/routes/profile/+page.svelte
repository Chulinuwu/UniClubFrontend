<script type="ts">
	import Topnavbar from '$lib/components/Topnavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import FeedCard from '$lib/components/feedCard.svelte';
	import profile2 from '$lib/images/profile2.jpg';
	import profile3 from '$lib/images/profile3.jpg';
	import profile4 from '$lib/images/profile4.jpg';

	const memos = [
		{
			date: '10/22/2024',
			imageURL: profile2,
			name: 'CEDT Sandbox Clubbbb',
			header: 'Moodeng is born i am very happy to see Moodeng'
		},
		{
			date: '11/15/2024',
			imageURL: profile2,
			name: 'Music Club',
			header: 'We had an amazing concert last night!'
		},
		{
			date: '12/01/2024',
			imageURL: profile2,
			name: 'Art Club',
			header: 'Our art exhibition was a great success!'
		},
		{
			date: '01/10/2025',
			imageURL: profile2,
			name: 'Science Club',
			header: 'Our science fair showcased incredible projects!'
		},
		{
			date: '02/20/2025',
			imageURL: profile2,
			name: 'Drama Club',
			header: 'The drama performance was a hit!'
		},
		{
			date: '03/05/2025',
			imageURL: profile2,
			name: 'Literature Club',
			header: 'We had a wonderful book reading session.'
		},
		{
			date: '04/12/2025',
			imageURL: profile2,
			name: 'Sports Club',
			header: 'Our team won the inter-college championship!'
		},
		{
			date: '05/18/2025',
			imageURL: profile2,
			name: 'Photography Club',
			header: 'Our photo walk captured stunning images.'
		},
		{
			date: '06/25/2025',
			imageURL: profile2,
			name: 'Cooking Club',
			header: 'We had a fun and delicious cooking competition.'
		},
		{
			date: '07/30/2025',
			imageURL: profile2,
			name: 'Robotics Club',
			header: 'Our robots performed exceptionally well in the competition.'
		}
	];
</script>

<div class="w-full h-full">
	<Topnavbar />

	<div class="w-full h-[300px] bg-red-300 flex justify-center items-center text-center">
		PROFILE
	</div>
	<div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px]">
		{#each memos as memo}
			<FeedCard date={memo.date} imageURL={memo.imageURL} name={memo.name} header={memo.header} />
		{/each}
	</div>
	<BottomNavbar />
</div>
