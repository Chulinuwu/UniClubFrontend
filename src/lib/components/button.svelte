<script lang="ts">
	export let buttonName = '';
    
</script>

<button
    class="w-[80%] max-w-[400px] p-[10px] rounded-[50px] hover:bg-uni-darkred transition-all font-light text-white bg-uni-red h-[60px] flex justify-center items-center"
    on:click
    >
    <p>{buttonName}</p>
</button>
