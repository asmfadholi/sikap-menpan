import React from "react";
import { Avatar, Tooltip } from "antd";
import { UserOutlined, AntDesignOutlined } from "@ant-design/icons";

const AudienceCol = () => {
	return (
		<Avatar.Group
			maxCount={2}
			size="default"
			maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
		>
			<Avatar style={{ backgroundColor: "#f56a00" }}>M</Avatar>
			<Avatar style={{ backgroundColor: "#1890ff" }}>K</Avatar>
			<Tooltip title="Ant User" placement="top">
				<Avatar
					style={{ backgroundColor: "#87d068" }}
					icon={<UserOutlined />}
				/>
			</Tooltip>
			<Avatar
				style={{ backgroundColor: "#1890ff" }}
				icon={<AntDesignOutlined />}
			/>
		</Avatar.Group>
	);
};

export default AudienceCol;
