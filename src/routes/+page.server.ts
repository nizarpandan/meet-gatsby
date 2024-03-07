import type { Actions } from './$types';

export async function load() {
    const todos = "hallo";
    return { todos };
}

export const actions = {
	default: async (event) => {
        const formData = await event.request.formData();
        const todo = String(formData.get('search'));
		console.log(todo);
        return { success: true }
	},
} satisfies Actions;