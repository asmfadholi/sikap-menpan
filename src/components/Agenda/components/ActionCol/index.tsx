import React from "react";
import { Space, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ActionCol = () => {
	return (
		<Space size={8}>
			<Button type="default" icon={<EditOutlined />} size="small">
				Edit
			</Button>
			<Button
				type="default"
				danger
				icon={<DeleteOutlined />}
				size="small"
			>
				Hapus
			</Button>
		</Space>
	);
};

export default ActionCol;
