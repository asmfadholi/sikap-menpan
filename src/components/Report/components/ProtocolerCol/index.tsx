import React from "react";
import { Avatar, Tooltip } from "antd";

const colorList = ["#87d068", "#f56a00", "#1890ff"];

const ProtocolerCol = ({ row }) => {
	const { Protocolers = [] } = row;
	return (
		<Avatar.Group
			maxCount={2}
			size="default"
			maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
		>
			{Protocolers.length
				? Protocolers.map(({ userName }, idx) => {
						const shortName = userName[0].toUpperCase();
						const currentColor =
							colorList[Protocolers.length % (idx + 1)];
						return (
							<Tooltip title={userName} placement="top" key={idx}>
								<Avatar
									style={{ backgroundColor: currentColor }}
								>
									{shortName}
								</Avatar>
							</Tooltip>
						);
				  })
				: "-"}
		</Avatar.Group>
	);
};

export default ProtocolerCol;
