import React from "react";
import { Space, Rate, Tag } from "antd";

import { styName } from "./styles";

const RateCol = ({ row }) => {
	const { maxRating, meanRating } = row;
	return (
		<Space size={26} wrap>
			<Space size={4} wrap>
				{" "}
				<Rate disabled value={meanRating} allowHalf />
				<span>
					{meanRating}/{maxRating}
				</span>
			</Space>
			<Tag color="green">Cukup Baik </Tag>
		</Space>
	);
};

export default RateCol;
