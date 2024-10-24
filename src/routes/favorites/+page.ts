import { userProfile } from "$lib/mock/userMemos";
import { clubMemos } from '$lib/mock/clubmemos';
import { feedMemos } from '$lib/mock/feedmemos';

export async function load() {
    let user = userProfile[0];
    let clubsFav = clubMemos.filter(clubMemo => user.clubsFav.includes(clubMemo.clubId));
    let feedsFav = feedMemos.filter(feedMemo => user.feedsFav.includes(feedMemo.feedId));

    return { clubsFav, feedsFav };
}