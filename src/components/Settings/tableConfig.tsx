import React from "react";

import ActionCol from "./components/ActionCol";

const tableConfig = ({
	data,
	setMode,
	setData,
	setVisibleModal,
	setIsFirstModal,
}) => {
	const { page, limit, total } = data;
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
		defaultCurrent: 1,
		current: page,
		pageSize: limit,
		total,
	};

	const columns = [
		{
			title: "Nama",
			dataIndex: "userName",
			key: "userName",
		},
		{
			title: "Email",
			dataIndex: "userEmail",
			key: "userEmail",
		},
		{
			title: "No. Handphone",
			dataIndex: "userPhone",
		},
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
		rowKey: "activityId",
		scroll: { x: "max-content" },
		sticky: true,
	};
};

export default tableConfig;
