import {
	AuditOutlined,
	TeamOutlined,
	FileTextOutlined,
	GoldOutlined,
	AppstoreOutlined,
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
		icon: AuditOutlined,
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
