<script type="ts">
	import uniclub from '$lib/images/Uniclub.png';
	import Button from './button.svelte';
	import Placeholder from './placeholder.svelte';
	import home from './../icon/homeicon.svg';
	import edit from '../icon/edit.svg';
	import storkeheart from '../icon/strokeheart.svg';
	import fullheart from '../icon/fullheart.svg';
	import notification from '../icon/notification.svg';
	import search from '../icon/search.svg';
	import Topnavbar from './Topnavbar.svelte';
	import ClubNavbar from './ClubNavbar.svelte';


	let x = 0;
	function handlebuttonclick() {
		x++;
	}
</script>

<div>
	<Topnavbar/>
	<!-- <ClubNavbar/> -->
<section class="p-10 ">
	<div class="w-full justify-center flex h-[100px] mt-[200px]"><img src={uniclub} alt="uniclub" /></div>
	<div class="font-semibold text-xl mt-10 w-full flex justify-center text-uni-red">
		PlayGround (CEDT Sandbox)
	</div>
	<div class="font-light text-xl mt-10">This is light text</div>
	<div class="font-normal text-xl">This is normal text</div>
	<div class="font-bold text-xl">This is bold text</div>

	<section class="text-2xl mt-10 flex flex-col gap-6">
		<div class="text-uni-red">Button</div>
		<div class="w-full h-1 bg-uni-red"></div>
		<div>
			<Button buttonName="Click Me" on:click={handlebuttonclick} />
			<p>button clicked {x} time</p>
		</div>
	</section>

	<section class="text-2xl mt-10 flex flex-col gap-6">
		<div class="text-uni-red">Placeholder</div>
		<div class="w-full h-1 bg-uni-red"></div>
		<Placeholder inputName="Type me" />
	</section>

	<section class="text-2xl mt-10 flex flex-col gap-6">
		<div class="text-uni-red">Icon</div>
		<div class="w-full h-1 bg-uni-red"></div>
		<div class="flex flex-wrap gap-5">
			<img src={home} alt="home" />
			<img src={edit} alt="edit" />
			<img src={storkeheart} alt="strokeheart" />
			<img src={fullheart} alt="fullheart" />
			<img src={notification} alt="notification" />
			<img src={search} alt="search" />
		</div>
	</section>

</section>
</div>