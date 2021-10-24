import React from "react";
import { Modal, Form, Button, message, Select } from "antd";

import { useStatusList } from "hooks/useStatusList";
import { useUserByRoleList } from "hooks/useUserByRoleList";
import { useAddProtocolerInActivity } from "hooks/useAddProtocolerInActivity";

const normalizeProtocolerOptions = (arrData) =>
	arrData.map(({ userName, userId }) => ({ value: userId, label: userName }));

const sanitizeData = (data) => {
	const { activityAction = "", Protocolers = [] } = data;
	const newData = {
		...data,
		activityAction: { value: String(activityAction) },
		protocols: normalizeProtocolerOptions(Protocolers),
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const CreationModal = ({ visible, setVisible, mode, data }: any) => {
	const { list: listUser } = useUserByRoleList({ role: 3 });
	const { data: dataStatus } = useStatusList({ flag: 2 });
	const [addProtocoler] = useAddProtocolerInActivity();
	const { list: listStatus } = dataStatus;
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = `Tugaskan di kegiatan ${data.activityName}`;

	const handleOnFinish = async () => {
		const { activityId, handleFilter } = data;
		const { protocols, activityAction } = form.getFieldsValue();
		const body = {
			userIds: protocols.map(({ value }) => value).join(","),
			activityId,
			activityAction: activityAction?.value,
		};
		const { success } = await addProtocoler({ body });
		if (success) {
			message.success(
				`Berhasil ${isCreate ? "membuat draft" : ""} Menugaskan`,
			);
			handleFilter();
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
					label="Protokol kegiatan"
					rules={[required]}
					name="protocols"
				>
					<Select
						mode="multiple"
						options={normalizeProtocolerOptions(listUser)}
						placeholder="Pilih protokol"
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
