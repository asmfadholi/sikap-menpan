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
	TimePicker,
	Select,
} from "antd";

// hooks
import { useActivityCreate } from "hooks/useActivityCreate";
import { useActivityEdit } from "hooks/useActivityEdit";
import { useUserList } from "hooks/useUserList";
import { useStatusList } from "hooks/useStatusList";

// types
import { CreationModalInterface } from "./types";

const normalizeDihadiriOptions = (arrData) =>
	arrData.map(({ userName, userId }) => ({ value: userId, label: userName }));

const sanitizeData = (data) => {
	const {
		activityDateStart = "",
		activityDateEnd = "",
		activityTimeStart = "",
		activityTimeEnd = "",
		activityAction = "",
		activityDihadiri = [],
	} = data;
	if (!activityDateStart || !activityDateEnd) return {};
	const startDate = moment(`${activityDateStart} ${activityTimeStart}`);
	const endDate = moment(`${activityDateEnd} ${activityTimeEnd}`);
	const newData = {
		...data,
		activityAction: { value: activityAction },
		startDate: String(startDate) === "Invalid date" ? null : startDate,
		endDate: String(endDate) === "Invalid date" ? null : endDate,
		startTime: String(startDate) === "Invalid date" ? null : startDate,
		endTime: String(endDate) === "Invalid date" ? null : endDate,
		activityDihadiri: normalizeDihadiriOptions(activityDihadiri),
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const normalizeRequest = (reqData) => {
	const {
		activityAction,
		startDate,
		endDate,
		startTime,
		endTime,
		activityDihadiri,
		...rest
	} = reqData;
	const activityDateStart = startDate.format("YYYY-MM-DD");
	const activityDateEnd = endDate.format("YYYY-MM-DD");
	const activityTimeStart = startTime.format("HH:mm:ss");
	const activityTimeEnd = endTime.format("HH:mm:ss");
	const activityDihadiriNorm = activityDihadiri.map(({ value }) => value);

	return {
		...rest,
		activityDateStart,
		activityDateEnd,
		activityTimeStart,
		activityTimeEnd,
		activityDihadiri: activityDihadiriNorm,
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
	const { list } = useUserList();
	const [createActivity, { loading: loadingCreate }]: any =
		useActivityCreate();
	const { data: dataStatus } = useStatusList({ flag: 1 });
	const { list: listStatus } = dataStatus;
	const [editActivity, { loading: loadingEdit }]: any = useActivityEdit();
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = isCreate ? "Buat kegiatan" : "Edit kegiatan";

	const handleOnOk = async (body) => {
		const { success } = isCreate
			? await createActivity({ body })
			: await editActivity({ body });
		if (success) {
			message.success(
				`Berhasil ${isCreate ? "membuat" : "update"} kegiatan`,
			);
			refetch({});
		}
		setVisible(false);
	};

	const handleOnFinish = (res) => {
		const body = normalizeRequest({
			...res,
			activityId: data.activityId || undefined,
		});
		const { activityAction } = body;
		const isDraft = activityAction === "1";
		if (isDraft) {
			handleOnOk(body);
		} else {
			Modal.confirm({
				title: "Apa kamu yakin akan menugaskan kegiatan yang telah dibuat?",
				content:
					"Jika menugaskan kegiatan telah dibuat, maka akan muncul di halaman penugasan",
				onOk: async () => await handleOnOk(body),
				cancelText: "Tidak",
			});
		}
	};

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

	return (
		<Modal
			visible={visible}
			title={title}
			width={1000}
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
								format="DD-MMMM-YYYY"
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
								format="DD-MMMM-YYYY"
								placeholder="Masukkan tanggal berakhir"
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
				</Row>
				<Row gutter={16}>
					<Col span={24} md={12}>
						<Form.Item
							label="Waktu mulai"
							rules={[required]}
							name="startTime"
						>
							<TimePicker
								format="HH:mm"
								placeholder="Masukkan waktu mulai"
								style={{ width: "100%" }}
							/>
						</Form.Item>
					</Col>
					<Col span={24} md={12}>
						<Form.Item
							label="Waktu berakhir"
							rules={[required]}
							name="endTime"
						>
							<TimePicker
								format="HH:mm"
								placeholder="Masukkan waktu berakhir"
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
					label="Dihadiri"
					rules={[required]}
					name="activityDihadiri"
				>
					<Select
						mode="multiple"
						options={normalizeDihadiriOptions(list)}
						placeholder="Pilih dihadiri"
						allowClear
						showArrow
						labelInValue
					/>
				</Form.Item>

				<Form.Item
					label="Status"
					rules={[required]}
					name="activityAction"
				>
					<Select
						options={listStatus}
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
