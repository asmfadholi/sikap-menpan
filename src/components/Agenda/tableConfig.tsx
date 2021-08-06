import React from "react";

import ActionCol from "./components/ActionCol";
import PeriodeCol from "./components/PeriodeCol";

const tableConfig = ({
	total = 100,
	page = 1,
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
		total,
		current: page,
		pageSize: 10,
	};

	const columns = [
		{
			title: "Name Agenda",
			dataIndex: "name",
			sorter: true,
			// fixed: "left",
			key: "name",
		},
		{
			title: "Lokasi",
			dataIndex: "location",
			sorter: true,
			key: "location",
		},
		{
			title: "Detail",
			dataIndex: "detail",
			sorter: true,
			key: "detail",
		},
		{
			title: "Deskripsi",
			dataIndex: "description",
			sorter: true,
			key: "description",
		},
		{
			title: "Tanggal Agenda",
			dataIndex: "period",
			sorter: true,
			width: 340,
			key: "period",
			render: (_, row) => <PeriodeCol row={row} />,
		},
		{
			title: "Koordinator",
			dataIndex: "coordinator",
			key: "coordinator",
			render: (val) => val.label,
		},
		{
			title: "Protokol",
			dataIndex: "protocols",
			key: "protocols",
			render: (val) => val.map((pro) => pro.label).join(", "),
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
		rowKey: "campaignId",
		scroll: { x: 1800 },
		sticky: true,
	};
};

export default tableConfig;
