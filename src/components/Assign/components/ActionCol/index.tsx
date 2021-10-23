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
		const { activityAction = 0 } = row;
		const isActionDraftMenugaskan = Number(activityAction) === 3;
		if (isActionDraftMenugaskan) {
			setMode("edit");
		} else {
			setMode("create");
		}
		setData(row);
		setVisibleModal(true);
		setIsFirstModal(false);
	};

	return (
		<Space size={8}>
			<Button
				type="primary"
				icon={<TeamOutlined />}
				ghost
				size="small"
				onClick={handleOnEdit}
			>
				Tugaskan
			</Button>
		</Space>
	);
};

export default ActionCol;
