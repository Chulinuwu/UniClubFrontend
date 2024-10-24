import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { User } from "$lib/interface/interface";

export const userStore: Writable<User[]> = localStorageStore("userStore", []);