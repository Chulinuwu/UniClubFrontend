<script lang="ts">
	import ClubNavbar from '$lib/components/ClubNavbar.svelte';
	import clubbg from '../../../lib/images/clubbg.png';
	import TabClub from '$lib/components/tabClub.svelte';

	export let data;
	const { club } = data;

</script>

{#if club}
<div>eieieiei</div>
{/if}