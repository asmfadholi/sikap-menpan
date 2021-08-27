import React from "react";
import moment from "moment";
import type { RowArg } from "./types";

// style(s)
import { styDate, styDateFirst } from "./styles";

import "moment/locale/id";

const checkDate = (dateDate, timeData) => {
	const newDate = moment(dateDate).format("DD MMM YYYY");
	if (String(newDate) === "Invalid date") {
		return "-";
	} else {
		return (
			<span>
				<b>{newDate}</b> {timeData} WIB
			</span>
		);
	}
};

const PeriodeCol = ({ row }: RowArg) => {
	const {
		activityDateStart = "",
		activityDateEnd = "",
		activityTimeEnd = "",
		activityTimeStart = "",
	} = row;
	return (
		<>
			<div css={styDateFirst}>
				{checkDate(activityDateStart, activityTimeStart)}
			</div>

			<div css={styDate}>
				{checkDate(activityDateEnd, activityTimeEnd)}
			</div>
		</>
	);
};

export default PeriodeCol;
