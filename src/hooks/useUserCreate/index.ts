import { useState } from "react";
import { message as messageNotif } from "antd";
import { fetcher, POST } from "helpers/fetcher";

const normalizeResponse = (res) => {
	const { success, message } = res;
	if (!success) {
		messageNotif.error(message);
	}
	return { success, message };
};

const URL = "/user/add_submit";

const useUserCreate = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);

	const handleMutate: any = async ({ body }) => {
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
		} finally {
			setLoading(false);
		}
		return normalizeResponse(responseData);
	};

	return [handleMutate, { data, loading, error }];
};

export { useUserCreate };
