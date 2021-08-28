import React from "react";

import ActionCol from "./components/ActionCol";
import NameCol from "./components/NameCol";

const tableConfig = ({
	total = 1,
	page = 1,
	setData,
	setVisibleModal,
	setIsFirstModal,
}) => {
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
			title: "Nama",
			dataIndex: "name",
			width: 320,
			key: "name",
			render: (_, row) => <NameCol row={row} />,
		},
		{
			title: "Total Tugas",
			dataIndex: "totalTask",
			key: "totalTask",
		},
		{
			title: "Rata-rata nilai",
			dataIndex: "meanRating",
			key: "meanRating",
			render: (val, row) => `${val}/${row.maxRating}`,
		},

		{
			title: "",
			dataIndex: "action",
			key: "action",
			width: 200,
			render: (_, row) => (
				<ActionCol
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
