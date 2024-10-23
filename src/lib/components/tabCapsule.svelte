<script lang="ts">

	export let active: boolean = false;
	export let label: string;
</script>

<button
    class="gap-2 flex items-center rounded-full w-fit px-2 border cursor-pointer"
    class:border-uni-graybox={!active}
    class:text-uni-graytext={!active}
    class:border-uni-red={active}
    class:text-uni-red={active}
    on:click
>
    <span class="text-sm md:text-base">{label}</span>
</button>
