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
		roles: [1, 2],
		name: "Dashboard",
		key: "/",
		icon: AppstoreOutlined,
	},
	{
		roles: [1, 2],
		name: "Kegiatan",
		key: "/activity",
		icon: CalendarOutlined,
	},
	{
		roles: [1, 2],
		name: "Penugasan",
		key: "/assignment",
		icon: ContactsOutlined,
	},
	{
		roles: [1, 3],
		name: "Lapor",
		key: "/report",
		icon: FileOutlined,
	},
	{
		roles: [1, 4, 5, 6],
		name: "Penilaian",
		key: "/assessment",
		icon: FileDoneOutlined,
	},
	{
		roles: [1, 2, 6, 4, 5],
		name: "Protokoler",
		key: "/protocoler",
		icon: SafetyCertificateOutlined,
	},
	{
		roles: [1, 2, 3, 4, 5, 6],
		name: "Settings",
		key: "/settings",
		icon: SettingOutlined,
	},
];
