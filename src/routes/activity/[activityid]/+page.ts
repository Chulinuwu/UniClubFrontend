import { clubMemos } from '../../../lib/mock/clubmemos';
import { feedMemos } from '../../../lib/mock/feedmemos'; // Import feedMemos

export async function load({ params }) {
    const feedId = params.activityId;
    const feed = feedMemos.find((memo) => memo.feedId === feedId);
    if(!feed){
        return { status: 404, error: new Error('Feed not found') };
    }
    const club = clubMemos.find((memo) => memo.clubId === feed.clubId);

    return { feed: { ...club, feed }};

}
