import React from "react";
import { Space, Button } from "antd";
import { SolutionOutlined } from "@ant-design/icons";

const ActionCol = ({
	setMode,
	setData,
	row,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const { penilaian } = row;
	const handleOnEdit = () => {
		setMode("edit");
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	return (
		<Space size={8}>
			<Button
				type="primary"
				icon={<SolutionOutlined />}
				size="small"
				ghost
				// disabled={penilaian}
				onClick={handleOnEdit}
			>
				Beri Nilai
			</Button>
		</Space>
	);
};

export default ActionCol;
