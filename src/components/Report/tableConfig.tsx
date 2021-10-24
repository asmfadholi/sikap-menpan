import React from "react";

import ActionCol from "./components/ActionCol";
import ProtocolerCol from "./components/ProtocolerCol";
import TableColumns from "../TableColumns";

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
		...TableColumns({ status: false }),
		{
			title: "Protokoler",
			dataIndex: "protocoler",
			key: "protocoler",
			render: (_, row) => <ProtocolerCol row={row} />,
		},
		{
			title: "Action",
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
		scroll: { x: "max-content" },
		sticky: true,
	};
};

export default tableConfig;
