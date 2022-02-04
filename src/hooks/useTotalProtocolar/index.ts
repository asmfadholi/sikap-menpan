import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const url = "/Dashboard/get_count_protocoler?roleId=3";

const defaultData = { data: null, errors: [] };

const normalizeData = (objData) => {
	const { data = null, success } = objData || {};
	const errors = [];
	if (!success) {
		const errMessage = "Oops gagal memuat total protokoler";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	}
	return {
		data,
		errors,
	};
};

const useTotalProtocolar = () => {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState(defaultData);

	const getData = useCallback(async () => {
		setLoading(true);
		let newData;
		try {
			newData = await fetcher({
				url,
				method: GET,
				body: {},
				params: {},
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
		getData();
	}, []);

	return { loading, ...data };
};

export { useTotalProtocolar };
