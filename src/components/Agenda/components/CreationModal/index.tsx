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

// hooks
import { useActivityCreate } from "hooks/useActivityCreate";
import { useActivityEdit } from "hooks/useActivityEdit";

interface CreationModalInterface {
	visible: boolean;
	setVisible: (arg: boolean) => void;
	refetch?: any;
	mode: string;
	data?: any;
}

const sanitizeData = (data) => {
	const {
		activityDateStart = "",
		activityDateEnd = "",
		activityTimeStart = "",
		activityTimeEnd = "",
		activityAction = "",
	} = data;
	if (!activityDateStart || !activityDateEnd) return {};
	const startDate = moment(`${activityDateStart} ${activityTimeStart}`);
	const endDate = moment(`${activityDateEnd} ${activityTimeEnd}`);
	const newData = {
		...data,
		activityAction: { value: activityAction },
		startDate: String(startDate) === "Invalid date" ? null : startDate,
		endDate: String(endDate) === "Invalid date" ? null : endDate,
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const normalizeRequest = (reqData) => {
	const { activityAction, startDate, endDate, ...rest } = reqData;
	const activityDateStart = startDate.format("YYYY-MM-DD");
	const activityDateEnd = endDate.format("YYYY-MM-DD");
	const activityTimeStart = startDate.format("HH:mm:ss");
	const activityTimeEnd = endDate.format("HH:mm:ss");

	return {
		...rest,
		activityDateStart,
		activityDateEnd,
		activityTimeStart,
		activityTimeEnd,
		activityAction: activityAction.value,
	};
};

const CreationModal = ({
	visible,
	setVisible,
	mode,
	data,
	refetch,
}: CreationModalInterface) => {
	const [createActivity, { loading: loadingCreate }]: any = useActivityCreate();
	const [editActivity, { loading: loadingEdit }]: any = useActivityEdit();
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = isCreate ? "Buat agenda" : "Edit agenda";

	const handleOnFinish = async (res) => {
		const body = normalizeRequest({
			...res,
			activityId: data.activityId || undefined,
		});
		const { success } = isCreate
			? await createActivity({ body })
			: await editActivity({ body });
		if (success) {
			message.success(
				`Berhasil ${isCreate ? "membuat" : "update"} agenda`,
			);
			refetch({});
		}
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
					label="Nama agenda"
					rules={[required]}
					name="activityName"
				>
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
								format="DD-MMMM-YYYY HH:mm"
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
								format="DD-MMMM-YYYY HH:mm"
								placeholder="Masukkan tanggal berakhir"
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Form.Item
					label="Lokasi"
					rules={[required]}
					name="activityPlace"
				>
					<Input placeholder="Masukkan lokasi" />
				</Form.Item>

				<Form.Item
					label="Deskripsi"
					rules={[required]}
					name="activityDetail"
				>
					<Input.TextArea placeholder="Masukkan deskripsi agenda" />
				</Form.Item>

				<Form.Item
					label="Status"
					rules={[required]}
					name="activityAction"
				>
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

				<Form.Item label="Keterangan" name="activityDescription">
					<Input.TextArea placeholder="Masukkan keterangan" />
				</Form.Item>

				<Form.Item noStyle shouldUpdate>
					{() => {
						return (
							<Button
								loading={loadingCreate || loadingEdit}
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
