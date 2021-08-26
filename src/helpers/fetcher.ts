import axios from "axios";

const POST = "post";
const GET = "get";

const instanceAxios = () => {
	const token = localStorage.getItem("auth") || "";
	return axios.create({
		baseURL:
			process.env.NEXT_PUBLIC_BASE_URL || "https://sikap-api.komit.co.id",
		timeout: 10000,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
};

const fetcher = ({ body, method, url, params }) => {
	const api = instanceAxios();
	if (method === POST) {
		return api.post(url, body).then((res) => res.data);
	} else if (method === GET) {
		const qs = new URLSearchParams(params);
		return api.get(`${url}/${qs}`).then((res) => res.data);
	}
};

export { fetcher, POST, GET };
