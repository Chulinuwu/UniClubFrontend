import { userStore } from "$lib/store/userStore";

export async function load({ params }) {
    const userId = 'S12345';

    // Retrieve user data from localStorage
    let userData;
    userStore.subscribe(value => {
        userData = value
    });

    if (!userData) {
        return { status: 404, error: new Error('User data not found in localStorage') };
    }

    const user = userData.find((memo: { userId: string; }) => memo.userId === userId);

    if (!user) {
        return { status: 404, error: new Error('User not found') };
    }

    return { user };
}