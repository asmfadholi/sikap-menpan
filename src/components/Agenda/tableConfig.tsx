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
			title: "Name Kegiatan",
			dataIndex: "name",
			sorter: true,
			key: "name",
		},
		{
			title: "Status",
			dataIndex: "status",
			sorter: true,
			key: "status",
			render: (val) => val.label,
		},
		{
			title: "Lokasi",
			dataIndex: "location",
			sorter: true,
			key: "location",
		},
		{
			title: "Deskripsi",
			dataIndex: "description",
			sorter: true,
			key: "description",
		},
		{
			title: "Tanggal Kegiatan",
			dataIndex: "period",
			sorter: true,
			width: 340,
			key: "period",
			render: (_, row) => <PeriodeCol row={row} />,
		},

		{
			title: "Keterangan",
			dataIndex: "notes",
			key: "notes",
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
		rowKey: "id",
		scroll: { x: 1800 },
		sticky: true,
	};
};

export default tableConfig;
