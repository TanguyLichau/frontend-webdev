import { redirect } from "@sveltejs/kit";
import * as utilities from "$lib/utilities.js";

/** @type {import('./$types').PageServerLoad} */
export async function load() {
  // throw redirect(307, "/");
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const token = await utilities.getJWT(
      data.get("username"),
      data.get("password")
    );
    cookies.set("jwt", token.jwt);
    //console.log(JSON.parse(atob(token.jwt.split(".")[1])));
  },
};
