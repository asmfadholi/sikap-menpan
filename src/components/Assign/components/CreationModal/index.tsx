import React from "react";
import moment from "moment";
import { Modal, Form, Button, message, Select } from "antd";

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
	const title = `Tugaskan di kegiatan ${data.name}`;

	const handleOnFinish = async () => {
		message.success(`Berhasil Menugaskan`);
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
			width={600}
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
					label="Protokol kegiatan"
					rules={[required]}
					name="protocols"
				>
					<Select
						mode="multiple"
						options={[
							{ value: "pro 1", label: "pro 1" },
							{ value: "pro 2", label: "pro 2" },
						]}
						placeholder="Pilih protokol"
						allowClear
						showArrow
						labelInValue
					/>
				</Form.Item>

				<Form.Item
					label="Status"
					rules={[required]}
					name="statusProtocol"
				>
					<Select
						options={[
							{
								value: "Draft Menugaskan",
								label: "Draft Menugaskan",
							},
							{ value: "Menugaskan", label: "Menugaskan" },
						]}
						placeholder="Pilih status"
						allowClear
						showArrow
						labelInValue
					/>
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
