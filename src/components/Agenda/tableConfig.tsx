import React from "react";

import ActionCol from "./components/ActionCol";

const tableConfig = ({ total = 100, page = 1 }) => {
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
		defaultCurrent: 1,
		total,
		current: page,
		pageSize: 10,
	};

	const columns = [
		{
			title: "Name Agenda",
			dataIndex: "name",
			fixed: "left",
			width: 300,
			sorter: true,
			key: "name",
		},
		{
			title: "Detail",
			dataIndex: "detail",
			sorter: true,
			key: "detail",
		},
		{
			title: "Tanggal Agenda",
			dataIndex: "period",
			sorter: true,
			key: "period",
		},
		{
			title: "Aksi",
			dataIndex: "action",
			fixed: "right",
			width: 320,
			key: "action",
			render: () => <ActionCol />,
		},
	];

	return {
		pagination,
		columns,
		customTableParam: {},
		rowKey: "campaignId",
		scroll: { x: 1300 },
		sticky: true,
	};
};

export default tableConfig;
