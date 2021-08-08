import React from "react";
import { Space, Button } from "antd";
import { FileDoneOutlined } from "@ant-design/icons";

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

	return (
		<Space size={8}>
			<Button
				type="default"
				icon={<FileDoneOutlined />}
				size="small"
				onClick={handleOnEdit}
			>
				Laporan
			</Button>
		</Space>
	);
};

export default ActionCol;
