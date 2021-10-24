import React from "react";
import moment from "moment";
import { Modal, Form, Button, message, Input } from "antd";
import { useReportActivity } from "hooks/useReportActivity";

// components
import UploadImage from "../Upload";

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

const CreationModal = ({ visible, setVisible, mode, data }: any) => {
	const { activityName = "", activityId = "", handleFilter } = data;
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = `Laporan kegiatan ${activityName}`;
	const [reportActivity, { loading }] = useReportActivity();

	const handleOnFinish = async (val) => {
		const { uploadImage = [], catatan } = val;
		const { originFileObj } = uploadImage?.[0] || {};
		const body = new FormData();
		body.append("activityId", activityId);
		body.append("reportUrl", originFileObj);
		body.append("reportDescription", catatan);
		const { success } = reportActivity({ body });
		if (success) {
			message.success("Berhasil Melaporkan");
			handleFilter();
		}
		setVisible(false);
	};

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

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
				onFinish={handleOnFinish}
			>
				<Form.Item
					label="Dokumentasi"
					rules={[required]}
					name="uploadImage"
				>
					<UploadImage onChange={handleOnChangeUpload} />
				</Form.Item>

				<Form.Item label="Catatan" rules={[required]} name="catatan">
					<Input.TextArea placeholder="Masukkan catatan" />
				</Form.Item>

				<Form.Item noStyle shouldUpdate>
					{() => {
						return (
							<Button
								type="primary"
								htmlType="submit"
								loading={loading}
								style={{ width: "100%" }}
							>
								Simpan
							</Button>
						);
					}}
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CreationModal;
