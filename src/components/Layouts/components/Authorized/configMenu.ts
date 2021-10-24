import {
	ContactsOutlined,
	FileDoneOutlined,
	FileOutlined,
	SafetyCertificateOutlined,
	AppstoreOutlined,
	SettingOutlined,
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
		name: "Penugasan",
		key: "/assignment",
		icon: ContactsOutlined,
	},
	{
		name: "Lapor",
		key: "/report",
		icon: FileOutlined,
	},
	{
		name: "Penilaian",
		key: "/assessment",
		icon: FileDoneOutlined,
	},
	{
		name: "Protokoler",
		key: "/protocoler",
		icon: SafetyCertificateOutlined,
	},
	{
		name: "Settings",
		key: "/settings",
		icon: SettingOutlined,
	},
];
