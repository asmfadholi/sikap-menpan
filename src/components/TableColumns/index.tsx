import React from "react";
import LocationCol from "./components/LocationCol";
import StatusCol from "./components/StatusCol";
import NameCol from "./components/NameCol";
import PeriodeCol from "./components/PeriodeCol";
import AudienceCol from "./components/AudienceCol";

const TableColumns = () => {
	return [
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
			width: 150,
			key: "audience",
			render: () => <AudienceCol />,
		},
		{
			title: "Status",
			dataIndex: "activityStatus",
			key: "activityStatus",
			render: (_, row) => <StatusCol row={row} />,
		},
	];
};

export default TableColumns;
