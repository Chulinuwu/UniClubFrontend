<script lang="ts">
    import searchIcon from '../icon/search.svg'

	export let value: string = '';
	let inputRef: HTMLInputElement;

	function handleClickIcon() {
		inputRef.focus();
	}
</script>

<div class="search-bar">
	<button on:click={handleClickIcon} type="button">
		<img src={searchIcon} alt="Search Icon" />
	</button>

	<input
		type="text"
		class="w-full text-uni-red focus:border-none focus:outline-none"
		placeholder="Search"
		bind:value
		bind:this={inputRef}
	/>
</div>

<style>
	.search-bar {
		@apply w-full flex items-center gap-3 px-4 py-3 rounded-full border border-uni-graytext;
	}

	.search-bar:focus-within {
		@apply border-uni-red;
	}
</style>
