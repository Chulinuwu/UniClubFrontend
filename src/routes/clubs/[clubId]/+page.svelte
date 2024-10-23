<script context="module" lang="ts">
    export async function load() {
        console.log('load function executed'); // Log to verify execution
        return { props: { message: 'Hello from load function' } };
    }
</script>

<script lang="ts">
    export let message: string;

    console.log('message in component:', message); // Log message here
</script>

<div>
    <h1>{message}</h1>
</div>