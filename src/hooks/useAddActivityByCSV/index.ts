import { useState, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, POST } from "helpers/fetcher";

const url = "/activities/activitiy_add_csv";

const defaultData = { data: null, errors: [] };

const normalizeData = (objData) => {
	const { data = null, success } = objData || {};
	const errors = [];
	if (!success) {
		const errMessage = "Oops gagal upload csv";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	}
	return {
		data,
		errors,
	};
};

const useAddActivityByCSV = () => {
	const [loading, setLoading] = useState(false);
	const [, setData] = useState(defaultData);

	const uploadCsv = useCallback(async (body) => {
		setLoading(true);
		let newData;
		try {
			newData = await fetcher({
				url,
				method: POST,
				body,
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

	return { uploadCsv, loading };
};

export { useAddActivityByCSV };
