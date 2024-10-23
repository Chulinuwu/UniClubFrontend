<script>
    export let isOpen = false;
    export let onClose = () => {};
</script>

{#if isOpen}
    <div class="fixed inset-0 z-10 bg-black bg-opacity-50 flex justify-center items-center">
        <div class=" rounded shadow-lg w-full h-full ">
            <div class="bg-white rounded-3xl p-5 shadow-lg w-full h-2/3 -bottom-5 absolute ">
            <button class="absolute top-5 right-5" on:click={onClose}>✖</button>
            <slot></slot>
            </div>
        </div>
    </div>
{/if}

<style>
    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
</style>