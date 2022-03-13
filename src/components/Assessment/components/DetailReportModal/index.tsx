import React, { useEffect } from "react";
import moment from "moment";
import { Modal, Form, Input } from "antd";
import { useDetailReport } from "../../hooks/useDetailReport";

// components
import UploadImage from "./Upload";

const sanitizeData = (data) => {
	const { startDate = "", endDate = "" } = data;
	if (!startDate || !endDate) return {};
	const newData = {
		...data,
		startDate: moment(startDate),
		endDate: moment(endDate),
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const DetailReportModal = ({ visible, setVisible, mode, data }: any) => {
	const { activityName = "", activityId = "", userId } = data;
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = `Laporan kegiatan ${activityName}`;
	const { data: dataDetail } = useDetailReport({ userId, activityId });
	const { reportDescription, reportUrl } = dataDetail?.[0] || {};

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

	useEffect(() => {
		form.setFieldsValue({ reportDescription, reportUrl });
	}, [reportDescription, reportUrl]);

	const handleOnChangeUpload = () => {
		console.log("uploade");
	};

	return (
		<Modal
			visible={visible}
			title={title}
			width={700}
			onCancel={onHandleCancel}
			footer={null}
		>
			<Form
				form={form}
				layout="vertical"
				initialValues={!isCreate ? sanitizeData(data) : {}}
			>
				<Form.Item
					label="Dokumentasi"
					rules={[required]}
					name="reportUrl"
				>
					<UploadImage onChange={handleOnChangeUpload} disabled />
				</Form.Item>

				<Form.Item
					label="Catatan"
					rules={[required]}
					name="reportDescription"
				>
					<Input.TextArea placeholder="Masukkan catatan" disabled />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default DetailReportModal;
