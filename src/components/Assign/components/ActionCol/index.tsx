import React from "react";
import { Space, Button } from "antd";
import { TeamOutlined } from "@ant-design/icons";

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
				icon={<TeamOutlined />}
				size="small"
				onClick={handleOnEdit}
			>
				Tugaskan
			</Button>
		</Space>
	);
};

export default ActionCol;
