import {
	CalendarOutlined,
	CarryOutOutlined,
	SafetyCertificateOutlined,
	FileDoneOutlined,
} from "@ant-design/icons";

export const LIST = ({ allActivity, doneActivity, protocolar, report }) => {
	return [
		{
			title: "Total Kegiatan ",
			total: allActivity,
			color: "#FBC833",
			icon: <CalendarOutlined />,
		},
		{
			title: "Kegiatan Selesai",
			total: doneActivity,
			color: "#B72C30",
			icon: <CarryOutOutlined />,
		},
		{
			title: "Total Protokoler ",
			total: protocolar,
			color: "#333333",
			icon: <SafetyCertificateOutlined />,
		},
		{
			title: "Total Laporan",
			total: report,
			color: "#B72C30",
			icon: <FileDoneOutlined />,
		},
	];
};

export const CHART_DATA = [
	{
		month: "Jan",
		value: 3,
		type: "Kegiatan Selesai",
	},
	{
		month: "Feb",
		value: 4,
		type: "Kegiatan Selesai",
	},
	{
		month: "Mar",
		value: 3.5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Apr",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Mei",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Jun",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Apr",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Jul",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Ags",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Sep",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Okt",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Nov",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Des",
		value: 5,
		type: "Kegiatan Selesai",
	},
	{
		month: "Jan",
		value: 3,
		type: "Kegiatan Di agendakan",
	},
	{
		month: "Feb",
		value: 4,
		type: "Kegiatan Di agendakan",
	},
	{
		month: "Mar",
		value: 3.5,
		type: "Kegiatan Di agendakan",
	},
	{
		month: "Apr",
		value: 5,
		type: "Kegiatan Di agendakan",
	},
];
