import React from "react";
import { Tag } from "antd";
import type { FunctionArg } from "./types";

// constant(s)
import { STATUS, COLOR } from "constants/status";

const StatusCol: React.FC<FunctionArg> = ({ row }) => {
	const { activityStatus = "" } = row;
	return <Tag color={COLOR[activityStatus]}>{STATUS[activityStatus]}</Tag>;
};

export default StatusCol;