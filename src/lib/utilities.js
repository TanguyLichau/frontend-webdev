const API_URL = "http://localhost:3000";

function fetchJSON(response) {
  return response.json();
}

export async function getJWT(user, pass) {
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user,
        password: pass,
      }),
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}

export async function getAllLocations(JWT_TOKEN) {
  try {
    const response = await fetch(`${API_URL}/locations/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JWT_TOKEN.jwt,
      },
    });
    return fetchJSON(response);
  } catch (error) {
    console.error(error);
  }
}
