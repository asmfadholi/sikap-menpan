import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const url = "/Penilaian/list";
const defaultParams = { limit: 10, page: 1, search: "" };
const defaultData = { list: [], start: 0, total: 0, errors: [] };
const normalizeData = (objData) => {
	const { data = [], success = false, message = "" } = objData || {};
	const { start = 0, total_data: total = 0 } = data;
	const errors = [];
	if (!success) {
		const errMessage = message || "Oops gagal memuat list protocol";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	}
	return { list: data, start, total, errors };
};

const useProtocolarActivityList = (init = {}): any => {
	const [loading, setLoading] = useState(true);
	const [params, setParams] = useState({ ...defaultParams, ...init });
	const [data, setData] = useState(defaultData);

	const getData = useCallback(async (requestData) => {
		setLoading(true);
		let newData;
		try {
			newData = await fetcher({
				url,
				method: GET,
				body: {},
				params: requestData,
			});
		} catch (err) {
			newData = err;
		} finally {
			setLoading(false);
			const generateData = normalizeData(newData);
			setData(generateData);
			return generateData;
		}
	}, []);

	useEffect(() => {
		getData(params);
	}, []);

	const handleFilter = async (req) => {
		const newParams = { ...params, ...req };
		setParams(newParams);
		return await getData(newParams);
	};

	return { loading, handleFilter, params, data };
};

export { useProtocolarActivityList };
