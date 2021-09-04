import React from "react";

import ActionCol from "./components/ActionCol";
import TableColumns from "../TableColumns";

const tableConfig = ({
	setMode,
	setData,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
		defaultCurrent: 1,
	};

	const columns = [
		...TableColumns(),

		{
			title: "",
			dataIndex: "action",
			key: "action",
			render: (_, row) => (
				<ActionCol
					setMode={setMode}
					setData={setData}
					row={row}
					setVisibleModal={setVisibleModal}
					setIsFirstModal={setIsFirstModal}
				/>
			),
		},
	];

	return {
		pagination,
		columns,
		rowKey: "id",
		scroll: { x: "max-content" },
		sticky: true,
	};
};

export default tableConfig;
