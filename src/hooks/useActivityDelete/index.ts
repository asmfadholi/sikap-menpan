import { useState } from "react";
import { message as messageNotif } from "antd";
import { fetcher, POST } from "helpers/fetcher";

// types
import { UseActivityDeleteHooks } from "./types";

const normalizeResponse = (res) => {
	const { success, message } = res;
	if (!success) {
		messageNotif.error(message);
	}
	return { success, message };
};

const URL = "/activities/delete";



const useActivityDelete = (): UseActivityDeleteHooks => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const handleMutate = async ({ body }) => {
		let responseData = {};
		try {
			setLoading(true);
			const res = await fetcher({
				url: URL,
				method: POST,
				body,
				params: {},
			});
			setData(res);
			responseData = res;
		} catch (err) {
			setError(err.message);
			responseData = {
				success: false,
				message: err.message,
			};
		} finally {
			setLoading(false);
		}
		return normalizeResponse(responseData);
	};

	return [handleMutate, { data, loading, error }];
};

export { useActivityDelete };
