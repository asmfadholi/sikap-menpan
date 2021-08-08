import React from "react";
import moment from "moment";
import {
	Modal,
	Form,
	Input,
	Button,
	Row,
	Collapse,
	Col,
	DatePicker,
	message,
	Select,
	InputNumber,
} from "antd";

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

const { Panel } = Collapse;

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
	const title = `Penilaian Protokoler di kegiatan ${data.name}`;

	const handleOnFinish = async () => {
		message.success(`Berhasil Memberikan penilaian`);
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
				<Collapse defaultActiveKey={["1"]}>
					<Panel header="Protokoler 1 (Andi Rahman)" key="1">
						<Form.Item
							label="Penilaian"
							rules={[required]}
							name="rate1"
						>
							<InputNumber
								style={{ width: "100%" }}
								placeholder="Masukkan nilai dari 1-10"
							/>
						</Form.Item>
						<Form.Item label="Catatan" name="catatan1">
							<Input.TextArea placeholder="Masukkan catatan" />
						</Form.Item>
					</Panel>
					<Panel header="Protokoler 2 (Andi Iman)" key="2">
						<Form.Item
							label="Penilaian"
							rules={[required]}
							name="rate2"
						>
							<InputNumber
								style={{ width: "100%" }}
								placeholder="Masukkan nilai dari 1-10"
							/>
						</Form.Item>
						<Form.Item label="Catatan" name="catatan2">
							<Input.TextArea placeholder="Masukkan catatan" />
						</Form.Item>
					</Panel>
				</Collapse>

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
