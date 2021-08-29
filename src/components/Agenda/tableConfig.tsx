import React from "react";

import ActionCol from "./components/ActionCol";
import LocationCol from "./components/LocationCol";
import StatusCol from "./components/StatusCol";
import NameCol from "./components/NameCol";
import PeriodeCol from "../PeriodeCol";

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
			key: "activityName",
			render: (_, row) => <NameCol row={row} />,
		},
		{
			title: "Waktu  Kegiatan",
			dataIndex: "activityDateStart",
			key: "activityDateStart",
			render: (_, row) => <PeriodeCol row={row} />,
		},
		{
			title: "Lokasi",
			dataIndex: "activityPlace",
			key: "activityPlace",
			render: (_, row) => <LocationCol row={row} />,
		},
		{
			title: "Dihadiri",
			dataIndex: "audience",
			key: "audience",
			render: (val) => val || "-",
		},
		{
			title: "Status",
			dataIndex: "activityStatus",
			key: "activityStatus",
			render: (_, row) => <StatusCol row={row} />,
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
