import React from "react";
import { Row, Col, Card, Typography, Avatar } from "antd";

import { styCard } from "./styles";

const { Title } = Typography;

const CardDashboard = ({ detail }) => {
	const { title, total, color, icon } = detail;
	return (
		<Card css={styCard}>
			<Row>
				<Col span={15}>
					<Title level={3}>{title}</Title>
					<span className="total">{total}</span>
				</Col>
				<Col span={9} className="icon-col">
					<Avatar
						size={64}
						icon={icon}
						style={{ backgroundColor: color }}
					/>
				</Col>
			</Row>
		</Card>
	);
};

export default CardDashboard;
