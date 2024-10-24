import { userStore } from '$lib/store/userStore';
import { clubMemos } from '$lib/mock/clubmemos';
import { feedMemos } from '$lib/mock/feedmemos';
import type { User } from '$lib/interface/interface';

export async function load() {
    let user: User;
    // Subscribe to the userStore to get the user data
    userStore.subscribe(value => {
        user = value[0]; // Assuming you want the first user from the array
    })();
    
    let clubsFav = clubMemos.filter(clubMemo => user?.clubsFav.includes(clubMemo.clubId));
    let feedsFav = feedMemos.filter(feedMemo => user?.feedsFav.includes(feedMemo.feedId));

    return { clubsFav, feedsFav };
}