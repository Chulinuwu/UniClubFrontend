<script type="ts">
	import Topnavbar from '$lib/components/Topnavbar.svelte';
	import BottomNavbar from '$lib/components/bottomNavbar.svelte';
	import FeedCard from '$lib/components/feedCard.svelte';
	import profile2 from '$lib/images/profile2.jpg';
	import profile3 from '$lib/images/profile3.jpg';
	import profile4 from '$lib/images/profile4.jpg';
    import { goto } from '$app/navigation';

    function handleNavigate1() {
		goto(`/activity/F001`);
	}
    function handleNavigate2() {
		goto(`/activity/F002`);
	}
	
</script>

<div class="w-full h-full">
	<Topnavbar />
    <div>
	<div class="p-5 gap-[10px] flex flex-col w-full items-center mb-[100px] pt-[100px]">
            <FeedCard 
                    feedId="F001"
                    date="10/22/2024" 
                    imageURL= {profile2}
                    name="CEDT Sandbox Clubbbbb" 
                    header="Moodeng is born i am very happy to see Moodeng"
                    on:navigate = {handleNavigate1} 
            />
            <FeedCard 
                feedId="F002"
                date="11/15/2024" 
                imageURL= {profile2}
                name="Music Club" 
                header="We had an amazing concert last night!"
                on:navigate = {handleNavigate2}
            />
        </div>
    </div>

	<BottomNavbar />
</div>
