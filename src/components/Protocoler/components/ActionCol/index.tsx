import React from "react";
import { Space, Button } from "antd";

const ActionCol = ({ setData, row, setVisibleModal, setIsFirstModal }) => {
	const handleOnDetail = () => {
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	return (
		<Space size={8}>
			<Button type="primary" ghost size="middle" onClick={handleOnDetail}>
				Detail
			</Button>
		</Space>
	);
};

export default ActionCol;
