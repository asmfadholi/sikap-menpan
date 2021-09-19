import React from "react";
import { Space, Menu, message as messageNotif, Modal, Dropdown, Button } from "antd";
import {
	EditOutlined,
	EllipsisOutlined,
	DeleteOutlined,
} from "@ant-design/icons";

// hooks
import { useActivityDelete } from "hooks/useActivityDelete";

import { styIconElipsis, styEdit } from "./styles";

const ActionCol = ({
	refetch,
	setMode,
	setData,
	row,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const [deleteActivity, { loading }] = useActivityDelete();
	const handleOnEdit = () => {
		setMode("edit");
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	const doDeleteActivity = async () => {
		const { activityId = 0 } = row;
		const { success } = await deleteActivity({ body: { activityId: Number(activityId) }});
		if (success) {
			messageNotif.success(
				`Kegiatan "${row.activityName}" berhasil dihapus`,
			)
		} else {
			messageNotif.error(
				`Kegiatan "${row.activityName}" gagal dihapus`,
			)
		}
		refetch();
	};

	const handleOnDelete = () => {
		Modal.confirm({
			title: `Apakah kamu yakin ingin menghapus "${row.activityName}"?`,
			onOk: async () => await doDeleteActivity(),
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
				<Button danger type="link" onClick={handleOnDelete} loading={loading}>
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
