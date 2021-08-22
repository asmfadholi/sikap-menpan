import React from "react";

import ActionCol from "./components/ActionCol";
import PeriodeCol from "./components/PeriodeCol";

const tableConfig = ({
	// total = 100,
	// page = 1,
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
		// total,
		// current: page,
		pageSize: 10,
	};

	const columns = [
		{
			title: "Name Kegiatan",
			dataIndex: "activityName",
			sorter: true,
			key: "activityName",
		},
		{
			title: "Status",
			dataIndex: "activityStatus",
			// sorter: true,
			key: "activityStatus",
			// render: (val) => val.label,
		},
		{
			title: "Lokasi",
			dataIndex: "activityPlace",
			// sorter: true,
			key: "activityPlace",
		},
		{
			title: "Deskripsi",
			dataIndex: "activityDescription",
			// sorter: true,
			key: "activityDescription",
		},
		{
			title: "Tanggal Kegiatan",
			dataIndex: "activityDateStart",
			// sorter: true,
			width: 340,
			key: "activityDateStart",
			render: (_, row) => <PeriodeCol row={row} />,
		},

		{
			title: "Keterangan",
			dataIndex: "activityDetail",
			key: "activityDetail",
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
		scroll: { x: 1800 },
		sticky: true,
	};
};

export default tableConfig;
