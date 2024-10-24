<script lang="ts">
	import Profile from './profile.svelte';
	import edit from './../icon/edit.svg';
	export let name = '';
	export let role = '';
	export let imageURL = '';
	export let className: string = '';
	export { className as class };

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
		<img src={edit} alt="edit" />
	</div>
</div>
