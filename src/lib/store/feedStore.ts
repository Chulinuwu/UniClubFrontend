import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { Feed } from "$lib/interface/interface";

export const feedStore: Writable<Feed[]> = localStorageStore("feedStore", []);