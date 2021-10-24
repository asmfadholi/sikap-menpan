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
			render: (_, { reviewRate }) => (
				<RateCol
					row={{
						average: Number(reviewRate).toFixed(1),
						maxRating: 5,
					}}
				/>
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
