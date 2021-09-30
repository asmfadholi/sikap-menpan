import React from "react";

import ActionCol from "./components/ActionCol";
import TableColumns from "../TableColumns";

const tableConfig = ({
	data,
	refetch,
	setMode,
	setData,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const { page, limit } = data;
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
		defaultCurrent: 1,
		current: page,
		pageSize: limit,
	};

	const columns = [
		...TableColumns(),
		{
			title: "",
			dataIndex: "action",
			key: "action",
			render: (_, row) => (
				<ActionCol
					refetch={refetch}
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
		rowKey: "activityId",
		scroll: { x: "max-content" },
		sticky: true,
	};
};

export default tableConfig;
