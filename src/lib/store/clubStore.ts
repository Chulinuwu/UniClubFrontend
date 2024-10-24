import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { Club } from '$lib/interface/interface';
import { clubMemos } from '$lib/mock/clubmemos'

export const clubStore: Writable<Club[]> = localStorageStore("clubStore", clubMemos);

export function insertClub(newClub: Club) {
    clubStore.update(currentClubs => [newClub, ...currentClubs]);
}

export function updateMemberRole(clubId: string, studentId: string, newRole: string) {
    clubStore.update(currentClubs => {
        return currentClubs.map(club => {
            if (club.clubId === clubId) {
                // Find the member by studentId and update their role
                const updatedMembers = club.members.map(member => {
                    if (member.studentId === studentId) {
                        return { ...member, role: newRole }; // Update the member's role
                    }
                    return member;
                });

                // Return the updated club with updated members
                return { ...club, members: updatedMembers };
            }

            return club; // No change for other clubs
        });
    });
}