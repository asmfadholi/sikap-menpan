import React from "react";
import moment from "moment";
import type { RowArg } from "./types";

// style(s)
import { styTime, styDate } from "./styles";

import "moment/locale/id";

const FORMAT_DATE = "DD MMM YYYY";

const convertDate = (startDate, endDate) => {
	const start = moment(startDate).format(FORMAT_DATE);
	const end = moment(endDate).format(FORMAT_DATE);
	const invalidDate =
		String(startDate) === "Invalid date" ||
		String(endDate) === "Invalid date";
	if (invalidDate) {
		return "-";
	} else {
		return (
			<div>
				{" "}
				{start} - {end}
			</div>
		);
	}
};

const convertTime = (startTime, endTime) => {
	const invalidTime = !startTime && !endTime;
	const start = startTime.split(":");
	const end = endTime.split(":");
	if (invalidTime) {
		return "";
	} else {
		return (
			<div>
				{" "}
				{start[0]}:{start[1]} - {end[0]}:{end[1]} WIB
			</div>
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
			<div css={styDate}>
				{convertDate(activityDateStart, activityDateEnd)}
			</div>

			<div css={styTime}>
				{convertTime(activityTimeStart, activityTimeEnd)}
			</div>
		</>
	);
};

export default PeriodeCol;
