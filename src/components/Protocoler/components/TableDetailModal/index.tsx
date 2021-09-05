import React from "react";
import { Modal, Form } from "antd";
import TableDetail from "./components/TableDetail";

interface CreationModalInterface {
	visible: boolean;
	setVisible: (arg: boolean) => void;
	data?: any;
}

const TableDetailModal = ({
	visible,
	setVisible,
	data,
}: CreationModalInterface) => {
	const [form] = Form.useForm();
	const title = "Detail Penilaian Protokoler";

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

	return (
		<Modal
			visible={visible}
			title={title}
			width={1200}
			onCancel={onHandleCancel}
			footer={null}
		>
			<TableDetail list={data.detail} />
		</Modal>
	);
};

export default TableDetailModal;
