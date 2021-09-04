import React from "react";
import { Space, Button } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

const ActionCol = ({ setData, row, setVisibleModal, setIsFirstModal }) => {
	const handleOnDetail = () => {
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	return (
		<Space size={8}>
			<Button
				type="default"
				icon={<SolutionOutlined />}
				size="small"
				onClick={handleOnDetail}
			>
				Detail
			</Button>
		</Space>
	);
};

export default ActionCol;