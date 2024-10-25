import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { Club, Member } from '$lib/interface/interface';
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

export function addMember(clubId: string, newMember: Member) {
    clubStore.update(currentClubs => {
        return currentClubs.map(club => {
            if (club.clubId === clubId) {
                // Check if the member already exists
                const memberExists = club.members.some(member => member.studentId === newMember.studentId);
                if (!memberExists) {
                    // Add the new member to the club's members array
                    return { ...club, members: [...club.members, newMember] };
                }
            }
            return club; // No change for other clubs
        });
    });
}

export function deleteMember(clubId: string, studentId: string) {
    clubStore.update(currentClubs => {
        return currentClubs.map(club => {
            if (club.clubId === clubId) {
                // Filter out the member with the specified studentId
                const updatedMembers = club.members.filter(member => member.studentId !== studentId);

                // Return the updated club with the modified members list
                return { ...club, members: updatedMembers };
            }

            return club; // No change for other clubs
        });
    });
}