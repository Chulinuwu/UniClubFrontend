import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { Club } from '$lib/interface/interface';

export const clubStore: Writable<Club[]> = localStorageStore("clubStore", []);

export function insertClub(newClub: Club) {
    clubStore.update(currentClubs => [newClub, ...currentClubs]);
}