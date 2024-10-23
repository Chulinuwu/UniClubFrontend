<script type="ts">
    import Topnavbar from "$lib/components/Topnavbar.svelte";
    import BottomNavbar from "$lib/components/bottomNavbar.svelte";
	import FeedCard from "$lib/components/feedCard.svelte";
    import { feedMemos } from '$lib/mock/feedmemos';
   
</script>

<div class="w-full h-full">
    <Topnavbar/>
    
    <div class="w-full h-[300px] bg-red-300 flex justify-center items-center text-center">
        Corousel
    </div>
<div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px]">
    {#each feedMemos as memo}
    <FeedCard
        date={memo.date}
        imageURL={memo.imageURL}
        name={memo.name}
        header={memo.header}
    />
{/each}

</div>
    <BottomNavbar/>
</div>