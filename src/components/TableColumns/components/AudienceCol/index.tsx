import React from "react";
import { Avatar, Tooltip } from "antd";

const colorList = ['#87d068', '#f56a00', '#1890ff'];

const AudienceCol = ({ row }) => {
	const { activityDihadiri = [] } = row;
	return (
		<Avatar.Group
			maxCount={2}
			size="default"
			maxStyle={{ color: "#f56a00", backgroundColor: "#fde3cf" }}
		>	
			{activityDihadiri.length ? activityDihadiri.map(({ userName }, idx) => {
				const shortName = userName[0].toUpperCase();
				const currentColor = colorList[(activityDihadiri.length)%(idx + 1)];
				return (
					<Tooltip title={userName} placement="top" key={idx}>
						<Avatar style={{ backgroundColor: currentColor }}>{shortName}</Avatar>
					</Tooltip>
				)
			}) : '-'}
		</Avatar.Group>
	);
};

export default AudienceCol;
