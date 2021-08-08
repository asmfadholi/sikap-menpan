import React from "react";
import moment from "moment";
import { Modal, Form, Button, message, Input } from "antd";

// components
import UploadImage from "../Upload";

interface CreationModalInterface {
	visible: boolean;
	setVisible: (arg: boolean) => void;
	mode: string;
	data?: {
		name?: string;
		location?: string;
		detail?: string;
		description?: string;
		startDate?: string;
		endDate?: string;
	};
}

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

const CreationModal = ({
	visible,
	setVisible,
	mode,
	data,
}: CreationModalInterface) => {
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = `Laporan kegiatan ${data.name}`;

	const handleOnFinish = async () => {
		message.success(`Berhasil Melaporkan`);
		setVisible(false);
	};

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
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
				<Form.Item label="Catatan" rules={[required]} name="catatan">
					<Input.TextArea placeholder="Masukkan catatan" />
				</Form.Item>

				<Form.Item
					label="Dokumentasi"
					rules={[required]}
					name="uploadImage"
				>
					<UploadImage />
				</Form.Item>

				<Form.Item noStyle shouldUpdate>
					{() => {
						return (
							<Button
								type="primary"
								htmlType="submit"
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
