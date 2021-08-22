import React from "react";
import { Space } from "antd";
import moment from "moment";

import "moment/locale/id";

interface Row {
	activityDateStart: string;
	activityDateEnd: string;
	activityTimeEnd: string;
	activityTimeStart: string;
}

const checkDate = (dateDate, timeData) => {
	const newDate = moment(dateDate).format("DD MMMM YYYY");
	if (String(newDate) === "Invalid date") {
		return "-";
	} else {
		return `${newDate} ${timeData} WIB`;
	}
};

const PeriodeCol = ({ row }: { row: Row }) => {
	const {
		activityDateStart = "",
		activityDateEnd = "",
		activityTimeEnd = "",
		activityTimeStart = "",
	} = row;
	return (
		<Space size={8} split="-" direction="vertical">
			<div>{checkDate(activityDateStart, activityTimeStart)}</div>
			<div>{checkDate(activityDateEnd, activityTimeEnd)}</div>
		</Space>
	);
};

export default PeriodeCol;
