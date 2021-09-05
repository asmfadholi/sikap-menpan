import Router from "next/router";
import axios from "axios";

const POST = "post";
const GET = "get";

const instanceAxios = () => {
	const token = localStorage.getItem("auth") || "";

	const instanceAxiosVar = axios.create({
		baseURL:
			process.env.NEXT_PUBLIC_BASE_URL || "https://sikap-api.komit.co.id",
		timeout: 10000,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	instanceAxiosVar.interceptors.response.use(
		(config) => config,
		(error) => {
			const { message = "" } = error.response.data || {};
			const errAuth = message === "Failed to authenticate token";
			if (errAuth) {
				localStorage.removeItem("auth");
				Router.replace("/login");
			}
			return Promise.reject(error);
		},
	);

	return instanceAxiosVar;
};

const fetcher = ({ body, method, url, params }) => {
	const api = instanceAxios();
	if (method === POST) {
		return api.post(url, body).then((res) => res.data);
	} else if (method === GET) {
		const qs = new URLSearchParams(params);
		return api.get(`${url}?${qs}`).then((res) => res.data);
	}
};

export { fetcher, POST, GET };
