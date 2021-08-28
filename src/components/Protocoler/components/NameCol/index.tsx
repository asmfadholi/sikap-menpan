import React from "react";
import { Space } from "antd";

import { styName, styEmail, stySpace } from "./styles";

const NameCol = ({ row }) => {
	const { name, email } = row;
	return (
		<Space direction="vertical" size={5} css={stySpace}>
			{" "}
			<b css={styName}>{name}</b>
			<span css={styEmail}>{email}</span>
		</Space>
	);
};

export default NameCol;
