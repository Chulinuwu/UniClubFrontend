<script lang="ts">
	import ProfileNavbar from '$lib/components/profileNavbar.svelte';
	import MemberCard from '$lib/components/memberCard.svelte';
	import profile3 from '../../../lib/images/profile3.jpg';
	import type { ClubMemos } from '$lib/interface/interface';
	import { writable } from 'svelte/store';
	import { addMember } from '$lib/store/clubStore';
	import { userProfile } from '$lib/mock/userMemos';
	import { clubStore } from '$lib/store/clubStore';

	let clubs: ClubMemos
	export let data;
	let { club } = data;

	let activeMemberId: string | null = null;

	function toggleDetails(memberId: string) {
		activeMemberId = activeMemberId === memberId ? null : memberId;
	}

	function handleRoleChange(event) {
        const { studentId, newRole } = event.detail;
        const member = club.members.find(m => m.studentId === studentId);
        if (member) {
            member.role = newRole; // Update the local state
        }
    }

	// Modal visibility and input stores
	let showModal = writable(false);
	let newMemberId = writable('');
	let newMemberRole = writable('User'); // Default role
	let userNotFound = writable(false);  // Store to manage error display

	function handleSubmit() {
		// Check if the user exists in the system
		const user = userProfile.find(user => user.userId === $newMemberId);
		if (!user) {
			userNotFound.set(true); // Show error if user is not found
			return;
		}

		// Reset error display
		userNotFound.set(false);

		// Add new member
		addMember(club.clubId, {
			studentId: $newMemberId,
			name: user.name, // Extracted name from the system
			role: $newMemberRole
		});

		clubStore.subscribe(value => {
			location.reload();
		});


		// Close modal and reset fields
		showModal.set(false);
		$newMemberId = '';
		$newMemberRole = 'User';
	}
</script>

{#if club}
	<ProfileNavbar />
	<div class="flex w-full h-[100px]"></div>
	<div class="flex flex-col p-8">
		<div class="flex w-full h-auto gap-6 mb-4">
			<img
				src={club.imageURL}
				alt={club.name}
				class="w-28 h-28 max-w-[112px] max-h-[112px] object-cover shadow-lg rounded-xl"
			/>
			<div class="flex flex-col w-full h-auto gap-1 justify-between">
				<div class="text-xl font-bold text-black">{club.name}</div>
				<div class="flex w-1/2 h-1 bg-uni-graytext2"></div>
				<div class="text-base mt-1.5 text-uni-graytext">{club.header}</div>
			</div>
		</div>
		<div class="text-lg">
			Your Role: {club.members.find((member) => member.studentId === 'S12345')?.role}
		</div>
		<div class="text-lg mb-3">Members:</div>
		<div class="flex flex-col gap-3">
			{#each club.members as member}
				{#if member.studentId !== 'S12345'}
					<MemberCard
						clubId={club.clubId}
						studentId={member.studentId}
						name={member.name}
						role={member.role}
						imageURL={profile3}
						editable={club.members.find((member) => member.studentId === 'S12345')?.role ==
						'Super Admin'
							? true
							: false}
						class="w-full"
						isActive={activeMemberId === member.studentId}
						on:toggleDetails={() => toggleDetails(member.studentId)}
						on:roleChanged={handleRoleChange}
					/>
				{/if}
			{/each}
		</div>
		<!-- Fixed rounded button -->
		{#if club.members.find((member) => member.studentId === 'S12345')?.role == 'Super Admin'}
			<button 
				on:click={() => showModal.set(true)} 
				class="fixed bottom-20 right-8 w-16 h-16 rounded-full bg-uni-red text-2xl text-white shadow-lg hover:bg-red-600 flex items-center justify-center">
				+
			</button>
		{/if}

        <!-- Modal -->
        {#if $showModal}
            <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div class="bg-white rounded-lg p-8 max-w-sm w-full">
                    <h2 class="text-xl font-semibold mb-4">Enter a string</h2>
                    <!-- <input 
                        type="text" 
                        bind:value={$inputString} 
                        placeholder="Enter text..." 
                        class="w-full border border-gray-300 rounded-lg p-2 mb-4" 
                    /> -->
					<!-- Student ID input field -->
					<input 
					type="text" 
					bind:value={$newMemberId} 
					placeholder="Student ID" 
					class="w-full border rounded-lg p-2 mb-2" 
					/>
					<!-- Role selection dropdown -->
					<select 
						bind:value={$newMemberRole} 
						class="w-full border rounded-lg p-2 mb-4"
					>
						<option value="Super Admin">Super Admin</option>
						<option value="Admin">Admin</option>
						<option value="User">User</option>
					</select>
					<!-- Error message if user not found -->
					{#if $userNotFound}
						<div class="text-red-600 mb-4">User not found in the system. Please check the Student ID.</div>
					{/if}
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
