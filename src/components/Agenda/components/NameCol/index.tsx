import React from "react";
import type { FunctionArg } from "./types";

// style(s)
import { styName } from "./styles";

const NameCol: React.FC<FunctionArg> = ({ row }) => {
	const { activityName = "" } = row;
	return <div css={styName}>{activityName}</div>;
};

export default NameCol;
