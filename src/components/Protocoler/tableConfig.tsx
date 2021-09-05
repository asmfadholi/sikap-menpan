import React from "react";

import ActionCol from "./components/ActionCol";
import NameCol from "./components/NameCol";
import RateCol from "./components/RateCol";

const tableConfig = ({ setData, setVisibleModal, setIsFirstModal }) => {
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
		defaultCurrent: 1,
	};

	const columns = [
		{
			title: "Protokoler",
			dataIndex: "protocoler",
			width: 320,
			key: "protocoler",
			render: (_, row) => <NameCol row={row} />,
		},
		{
			title: "No. Induk",
			dataIndex: "no_induk",
			key: "no_induk",
		},
		{
			title: "Total Tugas",
			dataIndex: "totalTask",
			width: 120,
			key: "totalTask",
		},
		{
			title: "Nilai Rata-Rata ",
			dataIndex: "meanRating",
			key: "meanRating",
			render: (_, row) => <RateCol row={row} />,
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
