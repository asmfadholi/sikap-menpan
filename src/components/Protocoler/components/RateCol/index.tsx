import React from "react";
import { Space, Rate, Tag } from "antd";
import { RATING } from "constants/status";
import { RATING_COLOR } from "constants/status";

const RateCol = ({ row }) => {
	const { average } = row;
	const indexRate = Number(average).toFixed(0);
	return (
		<Space size={26} wrap>
			<Space size={4} wrap>
				{" "}
				<Rate disabled value={average} allowHalf />
			</Space>
			<Tag color={RATING_COLOR[indexRate]}>{RATING[indexRate]}</Tag>
		</Space>
	);
};

export default RateCol;
