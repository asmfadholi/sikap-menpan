import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const url = "/Activities/status";
const defaultParams = { flag: 0 };
const defaultData = { list: [], errors: [] };
const normalizeData = (objData) => {
	const { data = [], success = false, message = "" } = objData || {};
	const errors = [];
	if (!success) {
		const errMessage = message || "Oops gagal memuat list";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	}
	const listData = data.map(({ idStatus, Status }) => ({
		value: idStatus,
		label: Status,
	}));
	return {
		list: listData,
		errors,
	};
};

const useStatusList = (init = {}): any => {
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

export { useStatusList };
