import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const normalizeResponse = (res) => {
	const errors = [];
	const {
		success = false,
		message = "",
		data: list = [],
		total_data: total = 0,
	} = res || {};
	if (!success) {
		const messageError =
			message || "get user failed, please refresh the page";
		errors.push(messageError);
	}

	return { list, success, errors, total };
};

const handleError = (currentResponse) => {
	const { success, errors } = currentResponse;
	if (!success) {
		messageNotif.error(errors[0]);
	}
};

const URL = "/user/list";
const defaultParams = { page: 1, limit: 10, search: "" };
const initResponseData = { success: false, message: "", data: [] };

const useUserList = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const [params, setParams] = useState(defaultParams);
	const [responseData, setResponseData] = useState(initResponseData);

	const getData = useCallback(async (params) => {
		let currentResponse;
		setParams(params);
		setLoading(true);
		try {
			const res = await fetcher({
				url: URL,
				method: GET,
				body: {},
				params,
			});
			currentResponse = res;
		} catch (err) {
			currentResponse = err;
		} finally {
			setLoading(false);
		}
		handleError(currentResponse);
		setResponseData(currentResponse);
		return normalizeResponse(currentResponse);
	}, []);

	useEffect(() => {
		getData(params);
	}, []);

	const handleOnSearch = async (req) => {
		const paramsRequest = { ...params, ...req };
		return await getData(paramsRequest);
	};

	return {
		...normalizeResponse(responseData),
		...params,
		loading,
		refetch: handleOnSearch,
	}; // will return { page, limit, search, list, success, loading, refetch, errors }
};

export { useUserList };