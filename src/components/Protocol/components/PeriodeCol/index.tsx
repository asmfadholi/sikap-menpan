import React from "react";
import { Space } from "antd";
import moment from "moment";

import "moment/locale/id";

interface Row {
	startDate: string;
	endDate: string;
}

const PeriodeCol = ({ row }: { row: Row }) => {
	const { startDate, endDate } = row;
	return (
		<Space size={8} split="-" direction="vertical">
			<div>
				{moment(startDate).format("dddd, DD MMMM YYYY HH:mm")} WIB
			</div>
			<div>{moment(endDate).format("dddd, DD MMMM YYYY HH:mm")} WIB</div>
		</Space>
	);
};

export default PeriodeCol;
