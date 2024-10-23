<script type="ts">
	import Uniclublogo from '$lib/images/Uniclub.png';
	import Button from '$lib/components/button.svelte';
	import Placeholder from '$lib/components/placeholder.svelte';
</script>

<div class="w-full h-full fixed flex flex-col justify-center items-center">
	<div class="w-auto h-auto pb-32 flex flex-col gap-[12px] justify-center items-center">
		<img src={Uniclublogo} alt="Uniclub" class="w-[200px]" />
		<p class="text-2xl font-bold">Welcome to UniClub !</p>
		<p class="text-base text-uni-graytext">All club, One place</p>
		<div class="w-full h-full justify-center flex flex-col gap-2 mt-5">
			<Placeholder inputName="Email" />
			<Placeholder inputName="Password" />
			<a href="/dashboard" class="w-full h-full"> <Button buttonName="Login" class="" /></a>
			<p class="text-uni-red w-full text-center">Forgot Password?</p>
		</div>
	</div>
	<div class=" w-full h-[100px] absolute bottom-0 flex justify-center items-center">
		<p class="text-black">Term and Conditions</p>
	</div>
</div>
