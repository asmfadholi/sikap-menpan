import React from "react";

import PeriodeCol from "components/PeriodeCol";

const tableConfig = () => {
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
		},
		{
			title: "Lokasi",
			dataIndex: "activityPlace",
			key: "activityPlace",
		},
		{
			title: "Deskripsi",
			dataIndex: "activityDescription",
			key: "activityDescription",
		},
		{
			title: "Deskripsi",
			dataIndex: "activityDescription",
			key: "activityDescription",
		},
		{
			title: "Tanggal Kegiatan",
			dataIndex: "activityDateStart",
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
			title: "Nilai",
			dataIndex: "rating",
			key: "rating",
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
