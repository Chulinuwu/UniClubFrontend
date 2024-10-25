<script lang="ts">
    import ProfileNavbar from '$lib/components/profileNavbar.svelte';
    import BottomNavbar from '$lib/components/bottomNavbar.svelte';
    import ClubCard from '$lib/components/clubCard.svelte';
    import Profile from '../../lib/images/profile2.jpg';
    import { goto } from '$app/navigation';
    import { onMount } from 'svelte';
    import { browser } from '$app/environment';
    import { userStore } from '$lib/store/userStore';
    import { writable } from 'svelte/store';

    export let data;
    const { user } = data;
    const userId = 'S12345';

    // Modal visibility store
    let showModal = writable(false);

    // Input store
    let inputString = writable('');

    onMount(() => {
        if (browser) {
            if (!user) {
                console.error('User not found');
            }
        }
    });

    function handleNavigate(event: any) {
        const { clubId } = event.detail;
        goto(`profile/${clubId}`);
    }

    function handleSubmit() {
        showModal.set(false); // Close the modal after submission
        $inputString = '';    // Reset input after submit
        console.log("Submitted string:", $inputString);
        // Handle your submit logic here, such as sending the string to a server
    }

</script>

{#if user}
    <div class="w-full h-full relative">
        <ProfileNavbar />
        <div class="h-[100px]"></div>
        <div class="p-5 gap-4 flex flex-col w-full h-full min-h-[100vh] items-center mb-[100px]">
            <div class="w-[100px] h-[100px]">
                <img src={user.imageURL} alt="profile" class="rounded-full" />
            </div>
            <div class="gap-2 text-center">
                <div class="text-black text-2xl">
                    {user.name}
                </div>
                <div class="text-uni-graytext gap-0.5 text-lg">
                    <div>
                        {user.userId}
                    </div>
                    <div>
                        {user.faculty}
                    </div>
                </div>
            </div>
            <div class="flex w-1/2 h-0.5 bg-uni-red"></div>
            <div class="w-full flex justify-start">
                <div class="text-lg">Your clubs:</div>
            </div>
            <div class="flex flex-col gap-2.5 w-full">
                {#each user.clubs as club}
                    <ClubCard
                        clubId={club.clubId}
                        name={club.clubName}
                        quote={club.clubDescription}
                        imageURL={Profile}
                        on:navigate={handleNavigate}
                    />
                {/each}
            </div>
        </div>
        <BottomNavbar />

        <!-- Fixed rounded button -->
        <button 
            on:click={() => showModal.set(true)} 
            class="fixed bottom-20 right-8 w-16 h-16 rounded-full bg-uni-red text-2xl text-white shadow-lg hover:bg-red-600 flex items-center justify-center">
            +
        </button>

        <!-- Modal -->
        {#if $showModal}
            <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div class="bg-white rounded-lg p-8 max-w-sm w-full">
                    <h2 class="text-xl font-semibold mb-4">Enter a string</h2>
                    <input 
                        type="text" 
                        bind:value={$inputString} 
                        placeholder="Enter text..." 
                        class="w-full border border-gray-300 rounded-lg p-2 mb-4" 
                    />
                    <div class="flex justify-end gap-4">
                        <button 
                            on:click={() => showModal.set(false)} 
                            class="py-2 px-4 bg-gray-300 rounded-lg">
                            Cancel
                        </button>
                        <button 
                            on:click={handleSubmit} 
                            class="py-2 px-4 bg-uni-red text-white rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        {/if}
    </div>
{/if}
