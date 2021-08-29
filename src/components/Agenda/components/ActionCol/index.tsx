import React from "react";
import { Space, Menu, message, Modal, Dropdown, Button } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	DeleteOutlined,
} from "@ant-design/icons";

import { styIconElipsis, styEdit } from "./styles";

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

	const menu = (
		<Menu>
			<Menu.Item key="0">
				<Button type="link" onClick={handleOnEdit} css={styEdit}>
					<EditOutlined /> Edit
				</Button>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key="1">
				<Button danger type="link" onClick={handleOnDelete}>
					<DeleteOutlined /> Hapus
				</Button>
			</Menu.Item>
		</Menu>
	);

	return (
		<Space size={8}>
			<Dropdown overlay={menu} trigger={["click"]}>
				<div css={styIconElipsis}>
					<EllipsisOutlined />
				</div>
			</Dropdown>
			{/* <Button
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
			</Button> */}
		</Space>
	);
};

export default ActionCol;
