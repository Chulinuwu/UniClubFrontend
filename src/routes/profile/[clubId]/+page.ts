import { clubMemos } from '../../../lib/mock/clubmemos';
import { clubStore } from '$lib/store/clubStore';
import type { Club } from '$lib/interface/interface';

export async function load({ params }) {
	const clubId = params.clubId;
	let club;

	clubStore.subscribe(value => {
		club = value.filter(club => club.clubId === clubId)[0];
	});

	if (!club) {
		return { status: 404, error: new Error('id not found') };
	}

	return { club };
}
