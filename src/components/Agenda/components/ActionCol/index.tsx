import React from "react";
import { Space, Button, message, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ActionCol = ({
	setMode,
	setData,
	row,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const handleOnEdit = () => {
		setMode("edit");
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	const handleOnDelete = () => {
		Modal.confirm({
			title: `Apakah kamu yakin ingin menghapus "${row.activityName}"?`,
			onOk: () =>
				message.success(
					`Kegiatan "${row.activityName}" berhasil di hapus`,
				),
		});
	};
	return (
		<Space size={8}>
			<Button
				type="default"
				icon={<EditOutlined />}
				size="small"
				onClick={handleOnEdit}
			>
				Edit
			</Button>
			<Button
				type="default"
				danger
				icon={<DeleteOutlined />}
				size="small"
				onClick={handleOnDelete}
			>
				Hapus
			</Button>
		</Space>
	);
};

export default ActionCol;
