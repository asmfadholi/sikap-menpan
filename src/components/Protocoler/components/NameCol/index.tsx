import React from "react";
import { Space, Avatar } from "antd";

import { styName } from "./styles";

const NameCol = ({ row }) => {
	const { userName } = row;
	const shortName = userName[0].toUpperCase();
	return (
		<Space size={12}>
			{" "}
			<Avatar style={{ backgroundColor: "#BE596D", color: "#fff" }}>
				{shortName}
			</Avatar>
			<span css={styName}>{userName}</span>
		</Space>
	);
};

export default NameCol;
