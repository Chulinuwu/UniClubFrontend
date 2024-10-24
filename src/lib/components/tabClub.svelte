<script lang="ts">
    export let onSelect: (item: string) => void;

    let selectedItem = 'Info';
    const items = ['Info', 'Activity', 'Contacts'];

    function selectItem(item: string) {
        selectedItem = item;
        onSelect(item); // Call the callback function
    }
</script>

<style>
    .navbar-item {
        cursor: pointer;
        padding: 10px;
    }
    .selected {
        color: red;
        text-decoration: underline;
        text-underline-offset: 4px;
    }
</style>

<nav>
    {#each items as item}
        <span 
            class="navbar-item {selectedItem === item ? 'selected' : ''}" 
            on:click={() => selectItem(item)}>
            {item}
        </span>
    {/each}
</nav>