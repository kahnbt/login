import { getSession } from 'next-auth/client';
import UserProfile from '@/src/profile/user-profile';

function ProfilePage() {
	return <UserProfile />;
}

export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			redirect: {
				destination: '/auth',
				permanent: false,
			},
		};
	}

	return {
		props: { session }, // Use 'props' instead of 'prop'
	};
}

export default ProfilePage;
