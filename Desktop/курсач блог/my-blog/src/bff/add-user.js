import { regDate } from "./reg-date";

export const addUser = (login, password) =>
	fetch("http://localhost:3005/users", {
		method: "POST",
		headers: {
			"Content-Type": "application/json:charset=utf-8",
		},
		body: JSON.stringify({
			login: login,
			password: password,
			registed_at: regDate(),
			role_id: 2,
		}),
	});
