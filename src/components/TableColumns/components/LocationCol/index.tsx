import React from "react";
import { Space } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import type { FunctionArg } from "./types";

// style(s)
import { styLoc } from "./styles";

const LocationCol: React.FC<FunctionArg> = ({ row }) => {
	const { activityPlace = "" } = row;
	return (
		<Space size={6}>
			<EnvironmentOutlined />
			<div css={styLoc}>{activityPlace}</div>
		</Space>
	);
};

export default LocationCol;
