import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';
import type { User } from "$lib/interface/interface";
import { userProfile } from "$lib/mock/userMemos"

export const userStore: Writable<User[]> = localStorageStore("userStore", userProfile);

export function insertFavoriteClubOfUser(userId: string, clubId: string) {
    userStore.update(users => {
        const userIndex = users.findIndex(user => user.userId === userId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            if (!user.clubsFav.includes(clubId)) {
                user.clubsFav.push(clubId);
            }
            users[userIndex] = user;
        }

        return users;
    });
}

export function removeFavoriteClubOfUser(userId: string, clubId: string) {
    userStore.update(users => {
        const userIndex = users.findIndex(user => user.userId === userId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            const clubIndex = user.clubsFav.indexOf(clubId);

            if (clubIndex !== -1) {
                user.clubsFav.splice(clubIndex, 1); // Remove the club from favorites
            }

            users[userIndex] = user;
        }

        return users;
    });
}

export function insertFavoriteFeedOfUser(userId: string, feedId: string) {
    userStore.update(users => {
        const userIndex = users.findIndex(user => user.userId === userId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            if (!user.feedsFav.includes(feedId)) {
                user.feedsFav.push(feedId); // Add feed to the user's favorites
            }
            users[userIndex] = user;
        }

        return users;
    });
}

export function removeFavoriteFeedOfUser(userId: string, feedId: string) {
    userStore.update(users => {
        const userIndex = users.findIndex(user => user.userId === userId);
        if (userIndex !== -1) {
            const user = users[userIndex];
            const feedIndex = user.feedsFav.indexOf(feedId);

            if (feedIndex !== -1) {
                user.feedsFav.splice(feedIndex, 1); // Remove the feed from favorites
            }

            users[userIndex] = user;
        }

        return users;
    });
}