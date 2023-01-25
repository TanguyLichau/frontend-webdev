import { error } from '@sveltejs/kit';

function fetchJSON(response) {
	return response.json();
}

async function getJWT() {
	try {
		const response = await fetch(`http://localhost:3000/users/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				username: 'tanguy',
				password: 'mdp'
			})
		});
		return fetchJSON(response);
	} catch (error) {
		console.error(error);
	}
}

async function getAllLocations(JWT_TOKEN) {
	try {
		const response = await fetch(`http://localhost:3000/locations/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Bearer ' + JWT_TOKEN.jwt
			}
		});
		return fetchJSON(response);
	} catch (error) {
		console.error(error);
	}
}

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const token = await getJWT();
	const response = await getAllLocations(token);
	if (response) {
		return { response };
	}

	throw error(404, 'Not found');
}
