<script lang="ts">
    import Topnavbar from "$lib/components/Topnavbar.svelte";
    import BottomNavbar from "$lib/components/bottomNavbar.svelte";
    import FeedCard from "$lib/components/feedCard.svelte";
    import { clubMemos as memos } from '$lib/mock/clubmemos';
    import SearchBar from '$lib/components/searchBar.svelte';
    import TabCapsule from '$lib/components/tabCapsule.svelte';

    let searchValue = '';
    let selectedTabs: string[] = [];
    let tabs = [
        { label: 'Science', active: false },
        { label: 'Arts', active: false },
        { label: 'Sports', active: false }
    ];

    function toggle(index: number) {
        tabs = tabs.map((tab, i) => (i === index ? { ...tab, active: !tab.active } : tab));
        const tab = tabs[index];
        selectedTabs = tab.active
            ? [...selectedTabs, tab.label]
            : selectedTabs.filter((label) => label !== tab.label);
    }

    $: filteredMemos = memos.filter((memo) => {
        const matchesName = memo.name.toLowerCase().includes(searchValue.toLowerCase());
        const matchesCategory = selectedTabs.length > 0 ? selectedTabs.includes(memo.tags.category) : true;
        return matchesName && matchesCategory;
    });

   
</script>

<div class="w-full h-full">


    <div class="p-4">
        <SearchBar bind:value={searchValue} />
        <div class="text-uni-red">Capsule Filter</div>
        <div class="w-full h-1 bg-uni-red"></div>
        <div class="flex flex-wrap items-center gap-2">
            {#each tabs as tab, i}
                <TabCapsule active={tab.active} label={tab.label} on:click={() => toggle(i)} />
            {/each}
        </div>
        {#if selectedTabs.length > 0}
            <p class="mt-4">Selected Tabs: {selectedTabs.join(', ')}</p>
        {:else}
            <p class="mt-4">No Tab Selected</p>
        {/if}
    </div>

    <div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px]">
        {#each filteredMemos as memo}
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