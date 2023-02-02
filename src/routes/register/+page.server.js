import { redirect } from "@sveltejs/kit";
import * as utilities from "$lib/utilities.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    await utilities.registerUser(data.get("username"), data.get("password"));
    throw redirect(302, "/login");
  },
};
