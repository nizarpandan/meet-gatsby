import { WhitelistRoutes } from '$lib';
import { add_user, retrieve_user_by_id } from '$lib/application/hrm/hrm-service';
import {
	sessionHooks, 
	type Handler, 
	kindeAuthClient, 
	type SessionManager, 
	type EventHandler
} from '@kinde-oss/kinde-auth-sveltekit';
import { redirect } from '@sveltejs/kit';

export const handle: Handler = async ({event, resolve}) => {
	sessionHooks({event});

	if (event.url.pathname === '/api/auth/logout') {
		event.cookies.delete('rotaba_user', {
			path: '/'
		});
	}

	await addKindeUserToDb(event);

	const isAuthentication = await kindeAuthClient.isAuthenticated(
		event.request as unknown as SessionManager
	);
	
	if (!isAuthentication && event.url.pathname === WhitelistRoutes.Companies) {
		throw redirect(303, "/");
	}

	return await resolve(event);
};

async function addKindeUserToDb(event: EventHandler): Promise<void> {
	/// add kinde user to database if not exist
	if (!event.cookies.get('rotaba_user') && event.cookies.get('kinde_user') && event.url.pathname === '/') {
		event.cookies.set('rotaba_user', 'false', {
			httpOnly: true,
			path: '/',
			sameSite: 'strict'
		});
		let kindeUser = JSON.parse(event.cookies.get('kinde_user')!);
		let rotabaUser = await retrieve_user_by_id(kindeUser.id);
		if (rotabaUser.length === 0) {
			add_user({
				firstName: kindeUser.given_name,
				lastName: kindeUser.family_name,
				email: kindeUser.email,
				id: kindeUser.id,
				picture: ''
			});
		}
	}
}