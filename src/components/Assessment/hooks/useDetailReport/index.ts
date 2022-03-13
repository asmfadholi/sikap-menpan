import { useState, useEffect, useCallback } from "react";
import { message as messageNotif } from "antd";
import { fetcher, GET } from "helpers/fetcher";

const url = "/Penilaian/detail_report_by_protocoler_id";
const defaultData = { data: null, errors: [] };
const normalizeData = (objData) => {
	const { data = {}, success = false, message = "" } = objData || {};
	const errors = [];
	if (!success) {
		const errMessage = message || "Oops gagal memuat list kegiatan";
		errors.push(errMessage);
		messageNotif.error(errMessage);
	}
	return { data, errors, success };
};

const useDetailReport = (init = {}) => {
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
				params: init,
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

	return { loading, data };
};

export { useDetailReport };
