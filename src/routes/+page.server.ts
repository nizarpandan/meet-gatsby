import { kindeAuthClient, type SessionManager } from '@kinde-oss/kinde-auth-sveltekit';
import type { RequestEvent } from '@sveltejs/kit';

export async function load({request, params, cookies, url}: RequestEvent) {
	//console.log(cookies.getAll());
	const isAuthentication = await kindeAuthClient.isAuthenticated(
		request as unknown as SessionManager
	);

  let userProfile = null;
  if (isAuthentication) {
    userProfile = await kindeAuthClient.getUser(request as unknown as SessionManager);

    const userOrganizations = await kindeAuthClient.getUserOrganizations(
      request as unknown as SessionManager
    );

    const permission = await kindeAuthClient.getPermission(
      request as unknown as SessionManager,
      'read:profile'
    );

    const permissions = await kindeAuthClient.getPermissions(request as unknown as SessionManager);
    const aud = await kindeAuthClient.getClaim(request as unknown as SessionManager, 'aud');
  }

	return {
		isAuthentication,
		userProfile
	};
}
