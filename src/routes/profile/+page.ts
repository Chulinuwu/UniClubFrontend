export async function load({ params }) {
    const userId = 'S12345';

    // Retrieve user data from localStorage
    const userData = localStorage.getItem('userMemos');
    if (!userData) {
        return { status: 404, error: new Error('User data not found in localStorage') };
    }

    const userProfile = JSON.parse(userData);
    const user = userProfile.find((memo: { userId: string; }) => memo.userId === userId);

    if (!user) {
        return { status: 404, error: new Error('User not found') };
    }

    return { user };
}