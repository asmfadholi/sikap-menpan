import React from "react";
import { Avatar, Tooltip } from "antd";

const AudienceCol = () => {
	return (
		<Avatar.Group
			maxCount={2}
			size="default"
			maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
		>
			<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />

			<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
			<Tooltip title="Ant User" placement="top">
				<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
			</Tooltip>
		</Avatar.Group>
	);
};

export default AudienceCol;
