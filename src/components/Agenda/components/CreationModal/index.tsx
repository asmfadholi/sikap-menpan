import React, { useEffect } from "react";
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

	useEffect(() => {
		if (isCreate) {
			form.resetFields();
		} else {
			form.setFieldsValue(sanitizeData(data));
		}
	}, [isCreate]);

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

	return (
		<Modal
			visible={visible}
			title={`${title}`}
			width={600}
			onCancel={onHandleCancel}
			footer={null}
		>
			<Form
				form={form}
				layout="vertical"
				initialValues={sanitizeData(data)}
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
					label="Detail lokasi"
					rules={[required]}
					name="detail"
				>
					<Input.TextArea placeholder="Masukkan detail lokasi" />
				</Form.Item>
				<Form.Item
					label="Deskripsi agenda"
					rules={[required]}
					name="description"
				>
					<Input.TextArea placeholder="Masukkan deskripsi agenda" />
				</Form.Item>

				<Form.Item
					label="Koordinator agenda"
					rules={[required]}
					name="coordinator"
				>
					<Select
						options={[{ value: "koor 1", label: "Koor 1" }]}
						placeholder="Pilih koordinator"
						allowClear
						labelInValue
					/>
				</Form.Item>

				<Form.Item
					label="Protokol agenda"
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

				<Form.Item label="Peserta" rules={[required]} name="audiences">
					<Select
						mode="multiple"
						options={[
							{ value: "peserta 1", label: "peserta 1" },
							{ value: "peserta 2", label: "peserta 2" },
						]}
						placeholder="Pilih peserta"
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
