import { clubMemos } from '../../../lib/mock/clubmemos';

export async function load({ params }) {
	const clubId = params.clubId;

	const id = clubMemos.find((memo) => memo.clubId === clubId);

	if (!id) {
		return { status: 404, error: new Error('id not found') };
	}

	return { id };
}
