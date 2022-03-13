import { useState, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const url = "/activities/activitiy_get_csv";

const defaultData = { data: null, errors: [] };

const normalizeData = (objData) => {
	const { data = null, success } = objData || {};
	const errors = [];
	if (!success) {
		const errMessage = "Oops gagal download csv";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	} else {
		window.open(data, "_blank");
	}

	return {
		data,
		errors,
	};
};

const useDownloadFormatCsv = () => {
	const [loading, setLoading] = useState(false);
	const [, setData] = useState(defaultData);

	const downloadCsv = useCallback(async () => {
		setLoading(true);
		let newData;
		try {
			newData = await fetcher({
				url,
				method: GET,
				body: {},
				params: {},
			});
			const csvContent = `data:text/csv;charset=utf-8,${newData}`;
			const encodedUri = encodeURI(csvContent);
			window.open(encodedUri);
		} catch (err) {
			newData = err;
		} finally {
			setLoading(false);
			const generateData = normalizeData(newData);
			setData(generateData);
			return generateData;
		}
	}, []);

	return { downloadCsv, loading };
};

export { useDownloadFormatCsv };
