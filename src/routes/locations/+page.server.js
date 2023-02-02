import { redirect } from "@sveltejs/kit";
import * as utilities from "$lib/utilities.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  try {
    const JWT_TOKEN = cookies.get("jwt");
    const role = { value: cookies.get("role") };
    const jwt = { value: JWT_TOKEN };

    if (JWT_TOKEN === undefined) {
      throw redirect(307, "/login");
    }
    const locationlist = await utilities.getAllLocations(JWT_TOKEN);
    if (locationlist) {
      return { locationlist, role, jwt };
    }
  } catch (error) {
    throw redirect(307, "/login");
  }
}

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const locationObject = {
      filmName: data.get("name"),
      filmType: data.get("type"),
      filmProducerName: data.get("producername"),
      filmDirectorName: data.get("directorname"),
      address: data.get("address"),
      year: data.get("year"),
    };
    await utilities.createLocation(locationObject, cookies.get("jwt"));
  },
};
