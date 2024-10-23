import type { LoadEvent } from '@sveltejs/kit';

export async function load({ params }: LoadEvent) {
    console.log('load function executed'); // Log to verify execution
    return { props: { message: 'Hello from load function' } };
}