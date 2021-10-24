import React from "react";
import { Modal, Form, Input, Button, message, Select } from "antd";

import { ROLE_LIST } from "constants/role";

// hooks
import { useUserCreate } from "hooks/useUserCreate";
import { useUserEdit } from "hooks/useUserEdit";

// types
import { CreationModalInterface } from "./types";

const sanitizeData = (data) => {
	const { roleId } = data;
	const newData = {
		...data,
		userRole: { value: roleId },
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const normalizeRequest = (reqData) => {
	const { userRole = {}, userId = 0 } = reqData;
	return {
		userId,
		...reqData,
		roleId: userRole?.value,
	};
};

const CreationModal = ({
	visible,
	setVisible,
	mode,
	data,
	refetch,
}: CreationModalInterface) => {
	const [createUser, { loading: loadingCreate }]: any = useUserCreate();
	const [editUser, { loading: loadingEdit }]: any = useUserEdit();
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const title = isCreate ? "Buat User Baru" : "Edit User";

	const handleOnFinish = async (res) => {
		const body = normalizeRequest({ ...res, ...data });
		const { success } = isCreate
			? await createUser({ body })
			: await editUser({ body });
		if (success) {
			message.success(`Berhasil ${isCreate ? "membuat" : "update"} user`);
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
				<Form.Item label="Name" rules={[required]} name="userName">
					<Input placeholder="Masukkan Nama" />
				</Form.Item>

				<Form.Item label="Email" rules={[required]} name="userEmail">
					<Input placeholder="Masukkan email" type="email" />
				</Form.Item>

				<Form.Item
					label="No. Handphone"
					rules={[required]}
					name="userPhone"
				>
					<Input placeholder="Masukkan No. Handphone" type="number" />
				</Form.Item>

				<Form.Item label="Role" rules={[required]} name="userRole">
					<Select
						options={ROLE_LIST}
						placeholder="Pilih role"
						allowClear
						showArrow
						labelInValue
					/>
				</Form.Item>

				<Form.Item label="Password" name="userPassword">
					<Input placeholder="Masukkan password" type="password" />
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
