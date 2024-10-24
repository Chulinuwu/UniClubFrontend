import { clubMemos } from '../../../lib/mock/clubmemos';
import { feedMemos } from '../../../lib/mock/feedmemos'; // Import feedMemos

export async function load({ params }) {
	const clubId = params.clubId;

	const club = clubMemos.find((memo) => memo.clubId === clubId);

	if (!club) {
		return { status: 404, error: new Error('Club not found') };
	}

	// Find matching feedMemos based on clubId
	const activity = feedMemos.filter((feed) => feed.clubId === clubId);

	// Include the matching feedMemos in the club object under the activity property
	return { club: { ...club, activity } };
}
