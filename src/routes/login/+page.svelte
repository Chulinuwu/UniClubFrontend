<script type="ts">
	import Uniclublogo from '$lib/images/Uniclub.png';
	import Button from '$lib/components/button.svelte';
</script>

<div class="w-full h-full fixed flex flex-col justify-center items-center">
	<div class="w-auto h-auto pb-32 flex flex-col gap-[12px] justify-center items-center">
		<img src={Uniclublogo} alt="Uniclub" class="w-[200px]" />
		<p class="text-2xl font-bold">Welcome to UniClub !</p>
		<p class="text-base text-uni-graytext">All club, One place</p>
		<a href="/login2" class="w-full h-full"> <Button buttonName="Login with CU Account" class="mt-5" /></a>
		<a href="/login2" class="w-full h-full"> <Button buttonName="Login with Google Account" /></a>
	</div>
	<div class=" w-full h-[100px] absolute bottom-0 flex justify-center items-center">
		<p class="text-black">Don't have an account? <span class="text-uni-red">Register!</span></p>
	</div>
</div>
