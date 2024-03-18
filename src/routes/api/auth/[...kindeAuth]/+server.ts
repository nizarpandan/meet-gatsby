import {handleAuth} from '@kinde-oss/kinde-auth-sveltekit';
import type {RequestEvent} from '@sveltejs/kit';

export async function GET(requestEvents: RequestEvent) {
	// console.log(await requestEvents.cookies.getAll());
	//console.log(requestEvents);
	return handleAuth(requestEvents);
}
