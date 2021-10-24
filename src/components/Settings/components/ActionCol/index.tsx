import React from "react";
import { Space, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { styEdit } from "./styles";

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
				size="small"
				onClick={handleOnEdit}
				css={styEdit}
			>
				<EditOutlined /> Edit
			</Button>
		</Space>
	);
};

export default ActionCol;
