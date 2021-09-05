import React from "react";
import { Row, Col, Card } from "antd";
import { Column } from "@ant-design/charts";

// list
import { LIST, CHART_DATA } from "./__mocks_data__/list";

// component(s)
import CardDashboard from "./components/CardDashboard";

function Dashboard() {
	const config = {
		data: CHART_DATA,
		isStack: true,
		xField: "month",
		yField: "value",
		seriesField: "type",
		minColumnWidth: 10,
		maxColumnWidth: 10,
		legend: {
			layout: "horizontal",
			position: "top-left",
		},

		color: ({ type }) => {
			if (type === "Kegiatan Di agendakan") {
				return "#B72C30";
			}
			return "#FBC833";
		},
		label: {
			position: "top",
			autoHide: true,
			layout: [
				{ type: "interval-adjust-position" },
				{ type: "interval-hide-overlap" },
				{ type: "adjust-color" },
			],
		},
	} as any;
	return (
		<>
			<h2>Dashboard</h2>
			<Row gutter={[20, 20]}>
				{LIST.map((detail, idx) => {
					return (
						<Col span={12} lg={6} key={idx}>
							<CardDashboard detail={detail} />
						</Col>
					);
				})}
			</Row>
			<Card style={{ marginTop: "44px" }}>
				<h2>Client Retention </h2>
				<Column {...config} />
			</Card>
		</>
	);
}

export default Dashboard;
