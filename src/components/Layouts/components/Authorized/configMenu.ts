import {
	TeamOutlined,
	FileTextOutlined,
	GoldOutlined,
	AppstoreOutlined,
	CalendarOutlined,
} from "@ant-design/icons";

export default [
	{
		name: "Dashboard",
		key: "/",
		icon: AppstoreOutlined,
	},
	{
		name: "Kegiatan",
		key: "/activity",
		icon: CalendarOutlined,
	},
	{
		name: "Protokoler",
		key: "/protocoler",
		icon: TeamOutlined,
	},
	{
		name: "Penugasan",
		key: "/assignment",
		icon: TeamOutlined,
	},
	{
		name: "Lapor",
		key: "/report",
		icon: FileTextOutlined,
	},
	{
		name: "Penilaian",
		key: "/assessment",
		icon: GoldOutlined,
	},
];
