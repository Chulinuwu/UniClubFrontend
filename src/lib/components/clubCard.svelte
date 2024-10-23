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

<div class="{className} max-w-[400px] h-[100px] p-2 w-full rounded-md bg-uni-graybox flex gap-3">
    <Profile imageURL={imageURL} class="bg-white min-w-[80px] min-h-[80px] w-auto h-auto rounded p-2 shadow-md"/>
    <div class="flex flex-col">
        <div class="text-base">{truncatedName}</div>
        <div class="text-xs text-uni-graytext">{truncatedQuote}</div>
    </div>
</div>