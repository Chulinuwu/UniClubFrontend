<script type="ts">
	import ProfileNavbar from '$lib/components/profileNavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import Profile from '$lib/images/profile1.png';

	import img1 from '../../lib/images/imageSlider1.png';
	import img2 from '../../lib/images/imageSlider2.png';
	import img3 from '../../lib/images/imageSlider3.png';

	let images = [img1, img2, img3];
</script>

<div class="w-full h-full">
	<ProfileNavbar />
	<div class="h-[100px]"></div>
	<div class="p-5 gap-[10px] flex flex-col w-full h-full min-h-[100vh] items-center mb-[100px]">
		<div class=" w-[100px] h-[100px]">
			<img src={Profile} alt="profile" />
		</div>
	</div>
	<BottomNavbar />
</div>
