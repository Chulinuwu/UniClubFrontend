<script lang="ts">
    import Profile from "./profile.svelte";
    export let name = '';
    export let quote = '';
    export let imageURL = '';
    export let className: string = '';
    export { className as class };

    $: truncatedQuote = quote.length > 24 ? quote.slice(0, 24) + '...' : quote;

    $: truncatedName = name.length > 13 ? name.slice(0, 13) + '...' : name;
</script>

<div class="{className} max-w-[400px] h-[100px] p-2 w-[90%] rounded-md bg-uni-graybox flex gap-3">
    <Profile imageURL={imageURL} class="bg-white w-auto h-auto rounded p-2 shadow-md"/>
    <div class="flex flex-col">
        <div>{truncatedName}</div>
        <div class="text-sm text-uni-graytext">{truncatedQuote}</div>
    </div>
</div>