import { getAllCompanies } from '$lib/infrastructure/db/repositories/company-repository';
import type { Actions } from './$types';

let ids: Array<number> = [23, 34, 100, 124, 44];
export async function load() {
    const popo = await getAllCompanies();
    console.log(popo);
    const todos = "hallo";
    return { todos, ids };
}

export const actions = {
	default: async (event) => {
        const formData = await event.request.formData();
        const todo = String(formData.get('search'));
        ids = [...ids, 55]
		console.log(formData);
        return { success: true }
	},
} satisfies Actions;