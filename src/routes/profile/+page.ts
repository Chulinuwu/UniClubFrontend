import { userProfile } from '../../lib/mock/userMemos';

export async function load({ params }) {
	const userId = 'S12345';

	const user = userProfile.find((memo) => memo.userId === userId);

	if (!user) {
		return { status: 404, error: new Error('user not found') };
	}

	return { user };
}
