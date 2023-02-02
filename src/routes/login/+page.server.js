import { error, redirect } from "@sveltejs/kit";
import * as utilities from "$lib/utilities.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    try {
      const data = await request.formData();
      const token = await utilities.getJWT(
        data.get("username"),
        data.get("password")
      );

      const jwtpayload = JSON.parse(atob(token.jwt.split(".")[1]));

      cookies.set("jwt", token.jwt);
      cookies.set("role", jwtpayload.role);
    } catch {
      //reset les cookies en cas de probleme
      cookies.set("jwt");
      cookies.set("role");
    }
    throw redirect(302, "/locations");
  },
};
