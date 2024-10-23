<script lang="ts">
	export let buttonName = '';
	export let className: string = '';
	export { className as class };
</script>

<button
	class="w-[80%] {className} max-w-[400px] p-[10px] rounded-[50px] hover:bg-uni-darkred transition-all font-light text-white bg-uni-red h-[60px] flex justify-center items-center"
	on:click
>
	<p>{buttonName}</p>
</button>
