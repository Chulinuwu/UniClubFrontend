import { clubMemos } from '../../../lib/mock/clubmemos';

export async function load({ params }) {
  const clubId = params.clubId;

  const club = clubMemos.find(memo => memo.clubId === clubId);

  if (!club) {
    return { status: 404, error: new Error('Club not found') };
  }

  return { club };
}