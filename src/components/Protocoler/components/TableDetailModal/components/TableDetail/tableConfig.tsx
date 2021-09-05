import React from "react";

import TableColumns from "components/TableColumns";
import RateCol from "../../../RateCol";

const tableConfig = () => {
	const pagination = {
		position: ["bottomRight"],
		showQuickJumper: false,
		showSizeChanger: true,
	};

	const columns = [
		...TableColumns({ status: false, audience: false }),
		{
			title: "Nilai",
			dataIndex: "rating",
			key: "rating",
			render: (_, { rating }) => (
				<RateCol row={{ meanRating: rating, maxRating: 5 }} />
			),
		},
	];

	return {
		bordered: true,
		pagination,
		columns,
		rowKey: "activityId",
		scroll: { x: "max-content" },
		sticky: true,
	};
};

export default tableConfig;
