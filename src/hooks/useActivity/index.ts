import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const normalizeResponse = (res) => {
	const { success, message } = res;
	if (!success) {
		messageNotif.error(message);
	}
};

const URL = "/activities/list";

const useActivity = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [data, setData] = useState({ data: [] });
	const [error, setError] = useState(null);

	const getData = useCallback(async (params) => {
		setLoading(true);
		try {
			const res = await fetcher({
				url: URL,
				method: GET,
				body: {},
				params,
			});
			setData(res);
			normalizeResponse(res);
		} catch (err) {
			setError(err.message);
			const responseData = {
				success: false,
				message: err.message,
				token: "",
			};
			normalizeResponse(responseData);
		} finally {
			setLoading(false);
		}

		setLoading(false);
	}, []);

	useEffect(() => {
		getData({});
	}, []);

	const handleOnSearch = (val = "") => {
		const params = {
			p: 1,
			s: val,
		};
		getData(params);
	};

	return {
		loading,
		list: data?.data || [],
		refetch: handleOnSearch,
		total: 100,
		page: 1,
		error,
	};
};

export { useActivity };
