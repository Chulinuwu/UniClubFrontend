<script lang="ts">
	import Profile from './profile.svelte';
	import edit from './../icon/edit.svg';
	import { createEventDispatcher } from 'svelte';
	export let name = '';
	export let role = '';
	export let imageURL = '';
	export let editable = false;
	export let className: string = '';
	export let isActive = false;
	export { className as class };

	export let updateMockMemo = (e: string) => {
		role=e;
	};
	let showDetails = false;
	const dispatch = createEventDispatcher();

	function toggleDetails() {
		dispatch('toggleDetails');
	}


	
	$: truncatedName = name.length > 20 ? name.slice(0, 20) + '...' : name;
</script>

<div
	class="{className} max-w-[400px] items-center h-auto p-3 px-5 w-full rounded-md bg-white border border-black flex justify-between"
>
	<div class="flex items-center gap-4">
		<Profile {imageURL} class="max-w-[75px] max-h-[75px] rounded-full" />
		<div class="flex flex-col h-auto">
			<div class="text-base text-black h-auto max-w-[190px]">{truncatedName}</div>
			<div class="text-base text-uni-red">{role}</div>
		</div>
	</div>
	<div class="flex justify-center items-center">
		{#if editable}
			<button on:click={toggleDetails} class="cursor-pointer flex justify-center items-center"> 
				<img src={edit} alt="edit" class="cursor-pointer" />
			</button>
		{/if}
		{#if isActive}
			<div
				class="absolute right-6 w-40 h-auto bg-white border border-uni-red px-5 py-2.5 rounded shadow-lg text-md"
			>
				<div class="text-uni-graytext flex flex-col items-start justify-start w-full">
					<div><button class="w-full" type="button" on:click={() => updateMockMemo('Super Admin')} class:text-uni-red={role === 'Super Admin'} aria-label="Set role to Super Admin">Super Admin</button></div>
					<div><button class="w-full" type="button" on:click={() => updateMockMemo('Admin')} class:text-uni-red={role === 'Admin'} aria-label="Set role to Admin">Admin</button></div>
					<div><button class="w-full" type="button" on:click={() => updateMockMemo('User')} class:text-uni-red={role === 'User'} aria-label="Set role to User">User</button></div>
				</div>
				<div class="flex w-full h-px my-1 bg-uni-red"></div>
				<div class="text-uni-red">Delete Member</div>
				<div class="flex w-full h-px my-1 bg-uni-red"></div>
				<button class="text-uni-red" on:click={toggleDetails}>Close</button>
			</div>
		{/if}
	</div>
</div>
