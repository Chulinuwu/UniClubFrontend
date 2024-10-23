<script type="ts">
	import uniclub from '$lib/images/Uniclub.png';
	import Button from './button.svelte';
</script>

<section class="p-10">
	<div class="w-full justify-center flex h-[100px]"><img src={uniclub} alt="uniclub" /></div>
	<div class="font-semibold text-xl mt-10 w-full flex justify-center text-uni-red">
		PlayGround (CEDT Sandbox)
	</div>
    <div class="font-light text-xl">
        This is light text
    </div>
    <div class="font-normal text-xl">
        This is normal text
    </div>
    <div class="font-bold text-xl">
        This is bold text
    </div>

	<section class="text-2xl mt-10 flex  flex-col gap-6">
		<div class="text-uni-red">Button</div>
		<div class="w-full h-1 bg-uni-red"></div>
		<Button buttonName="Click Me" />
	</section>
</section>
