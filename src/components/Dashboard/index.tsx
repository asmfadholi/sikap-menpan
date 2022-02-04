import React from "react";
import { Row, Col, Card, Skeleton } from "antd";
import { Column } from "@ant-design/charts";
import { useTotalActivity } from "hooks/useTotalActivity";
import { useTotalActivityDone } from "hooks/useTotalActivityDone";
import { useTotalProtocolar } from "hooks/useTotalProtocolar";
import { useTotalReport } from "hooks/useTotalReport";
import { useRetentionClient } from "hooks/useRetentionClient";

// list
import { LIST } from "./__mocks_data__/list";

// component(s)
import CardDashboard from "./components/CardDashboard";

const monthList = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"Mei",
	"Jun",
	"Jul",
	"Ags",
	"Sep",
	"Okt",
	"Nov",
	"Des",
];

function Dashboard() {
	const { data: totalActivity, loading: loadingActivity } =
		useTotalActivity();
	const { data: totalActivityDone, loading: loadingActivityDone } =
		useTotalActivityDone();
	const { data: totalProtocolar, loading: loadingProtocolar } =
		useTotalProtocolar();
	const { data: totalReport, loading: loadingReport } = useTotalReport();
	const { data } = useRetentionClient();
	const { Di_agendakan = [], selesai = [] } = data || {};

	const isLoading =
		loadingActivity ||
		loadingActivityDone ||
		loadingProtocolar ||
		loadingReport;

	if (isLoading) return <Skeleton active />;

	let dataChart = [];
	monthList.forEach((val, idx) => {
		const genDataDone = {
			month: val,
			value: selesai[idx] || 0,
			type: "Kegiatan Selesai",
		};
		const genDataStart = {
			month: val,
			value: Di_agendakan[idx] || 0,
			type: "Kegiatan Di agendakan",
		};
		dataChart = [...dataChart, genDataDone, genDataStart];
	});

	const config = {
		data: dataChart,
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

	const renderList = LIST({
		allActivity: totalActivity,
		doneActivity: totalActivityDone,
		protocolar: totalProtocolar,
		report: totalReport,
	});

	return (
		<>
			<h2>Dashboard</h2>
			<Row gutter={[20, 20]}>
				{renderList.map((detail, idx) => {
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
