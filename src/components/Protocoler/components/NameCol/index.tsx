import React from "react";
import { Space, Avatar } from "antd";

import { styName } from "./styles";

const NameCol = ({ row }) => {
	const { name } = row;
	return (
		<Space size={12}>
			{" "}
			<Avatar style={{ backgroundColor: "#BE596D", color: "#fff" }}>
				M
			</Avatar>
			<span css={styName}>{name}</span>
		</Space>
	);
};

export default NameCol;
