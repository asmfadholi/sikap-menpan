import React from "react";
import moment from "moment";
import {
	Modal,
	Form,
	Input,
	Button,
	Row,
	Col,
	DatePicker,
	message,
	Select,
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
	const title = isCreate ? "Buat agenda" : "Edit agenda";

	const handleOnFinish = async () => {
		message.success(`Berhasil ${isCreate ? "membuat" : "update"} agenda`);
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
				<Form.Item label="Nama agenda" rules={[required]} name="name">
					<Input placeholder="Masukkan nama agenda" />
				</Form.Item>
				<Row gutter={16}>
					<Col span={24} md={12}>
						<Form.Item
							label="Tanggal mulai"
							rules={[required]}
							name="startDate"
						>
							<DatePicker
								showTime
								format="dddd DD-MMMM-YYYY HH:mm"
								placeholder="Masukkan tanggal mulai"
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
					<Col span={24} md={12}>
						<Form.Item
							label="Tanggal berakhir"
							rules={[required]}
							name="endDate"
						>
							<DatePicker
								showTime
								format="dddd DD-MMMM-YYYY HH:mm"
								placeholder="Masukkan tanggal berakhir"
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item label="Lokasi" rules={[required]} name="location">
					<Input placeholder="Masukkan lokasi" />
				</Form.Item>

				<Form.Item
					label="Deskripsi"
					rules={[required]}
					name="description"
				>
					<Input.TextArea placeholder="Masukkan deskripsi agenda" />
				</Form.Item>

				<Form.Item label="Status" rules={[required]} name="status">
					<Select
						options={[
							{ value: "Diagendakan", label: "Diagendakan" },
							{ value: "Menugaskan", label: "Menugaskan" },
						]}
						placeholder="Pilih status"
						allowClear
						showArrow
						labelInValue
					/>
				</Form.Item>

				<Form.Item label="Keterangan" name="notes">
					<Input.TextArea placeholder="Masukkan keterangan" />
				</Form.Item>

				<Form.Item noStyle shouldUpdate>
					{() => {
						return (
							<Button
								type="primary"
								htmlType="submit"
								style={{ width: "100%" }}
							>
								{isCreate ? "Buat" : "Edit"}
							</Button>
						);
					}}
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default CreationModal;
