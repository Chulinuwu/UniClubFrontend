<script lang="ts">
    import Topnavbar from "$lib/components/Topnavbar.svelte";
    import BottomNavbar from "$lib/components/bottomNavbar.svelte";
    import FeedCard from "$lib/components/feedCard.svelte";
    import { clubMemos as memos } from '$lib/mock/clubmemos';
    import SearchBar from '$lib/components/searchBar.svelte';
    import TabCapsule from '$lib/components/tabCapsule.svelte';
    import  Clubcard from "$lib/components/clubCard.svelte"
    import filterIcon from "$lib/icon/filter.svg";
    import Modal from '$lib/components/modal.svelte';
    import { goto } from '$app/navigation';

	let searchValue = '';
	let selectedCategories: string[] = [];
	let selectedStatuses: string[] = [];
	let selectedTypes: string[] = [];

	let categoryTabs = [
		{ label: 'Science', active: false },
		{ label: 'Arts', active: false },
		{ label: 'Sports', active: false }
	];

	let statusTabs = [
		{ label: 'Open', active: false },
		{ label: 'Closed', active: false }
	];

	let typeTabs = [
		{ label: 'University', active: false },
		{ label: 'Faculty', active: false },
		{ label: 'Major', active: false }
	];

	function toggleCategory(index: number) {
		categoryTabs = categoryTabs.map((tab, i) =>
			i === index ? { ...tab, active: !tab.active } : tab
		);
		const tab = categoryTabs[index];
		selectedCategories = tab.active
			? [...selectedCategories, tab.label]
			: selectedCategories.filter((label) => label !== tab.label);
	}

	function toggleStatus(index: number) {
		statusTabs = statusTabs.map((tab, i) => (i === index ? { ...tab, active: !tab.active } : tab));
		const tab = statusTabs[index];
		selectedStatuses = tab.active
			? [...selectedStatuses, tab.label]
			: selectedStatuses.filter((label) => label !== tab.label);
	}

	function toggleType(index: number) {
		typeTabs = typeTabs.map((tab, i) => (i === index ? { ...tab, active: !tab.active } : tab));
		const tab = typeTabs[index];
		selectedTypes = tab.active
			? [...selectedTypes, tab.label]
			: selectedTypes.filter((label) => label !== tab.label);
	}

	$: filteredMemos = memos.filter((memo) => {
		const matchesName = memo.name.toLowerCase().includes(searchValue.toLowerCase());
		const matchesCategory =
			selectedCategories.length > 0 ? selectedCategories.includes(memo.tags.category) : true;
		const matchesStatus =
			selectedStatuses.length > 0 ? selectedStatuses.includes(memo.tags.status) : true;
		const matchesType = selectedTypes.length > 0 ? selectedTypes.includes(memo.tags.type) : true;
		return matchesName && matchesCategory && matchesStatus && matchesType;
	});

	let isModalOpen = false;

	function openModal() {
		isModalOpen = true;
	}

    function closeModal() {
        isModalOpen = false;
    }    

    function getClubDetails(clubId: any) {
        return memos.find(club => club.clubId === clubId);
    }

    function handleNavigate(event : any) {
        const { clubId } = event.detail;
        goto(`/clubs/${clubId}`);
    }
</script>

<div class="w-full h-full">
	<div class="p-4 flex w-full justify-between fixed bg-white items-center gap-5">
		<SearchBar bind:value={searchValue} />
		<button class="w-[32px]" on:click={openModal}>
			<img src={filterIcon} alt="filter" />
		</button>

		<!-- <div class="text-uni-red">Capsule Filter</div>
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
        {/if} -->
	</div>

    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div class="mt-3 font-bold">Category</div>
        <div class="w-full h-3 "></div>
        <div class="flex flex-wrap items-center gap-2">
            {#each categoryTabs as tab, i}
                <TabCapsule active={tab.active} label={tab.label} on:click={() => toggleCategory(i)} />
            {/each}
        </div>
        <div class="mt-5 font-bold">Status Filter</div>
        <div class="w-full h-3 "></div>
        <div class="flex flex-wrap items-center gap-2">
            {#each statusTabs as tab, i}
                <TabCapsule active={tab.active} label={tab.label} on:click={() => toggleStatus(i)} />
            {/each}
        </div>
        <div class="font-bold mt-4">Type</div>
        <div class="w-full h-3 "></div>
        <div class="flex flex-wrap items-center gap-2">
            {#each typeTabs as tab, i}
                <TabCapsule active={tab.active} label={tab.label} on:click={() => toggleType(i)} />
            {/each}
        </div>
    </Modal>
    <div class="w-full h-[95px]"></div>
    <div class="p-5 gap-[10px]  flex flex-col w-full items-center mb-[100px]">
        {#each filteredMemos as memo}
      <Clubcard clubId={memo.clubId} name={memo.name} quote={memo.header} imageURL={memo.imageURL} on:navigate={handleNavigate} />
        {/each}
    </div>

	<BottomNavbar />
</div>
