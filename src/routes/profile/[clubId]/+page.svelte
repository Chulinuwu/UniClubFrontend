<script lang="ts">
	import ProfileNavbar from '$lib/components/profileNavbar.svelte';
	import MemberCard from '$lib/components/memberCard.svelte';
	import profile3 from '../../../lib/images/profile3.jpg';
	import type { ClubMemos } from '$lib/interface/interface';

	let clubs: ClubMemos
	export let data;
	const { club } = data;

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
	</div>
{/if}
