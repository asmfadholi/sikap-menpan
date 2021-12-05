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
		roles: [1, 2, 3, 4, 5, 6, 7],
		name: "Dashboard",
		key: "/",
		icon: AppstoreOutlined,
	},
	{
		roles: [1, 2, 4, 5],
		name: "Kegiatan",
		key: "/activity",
		icon: CalendarOutlined,
	},
	{
		roles: [1, 2, 4, 5],
		name: "Penugasan",
		key: "/assignment",
		icon: ContactsOutlined,
	},
	{
		roles: [1, 2, 3, 7],
		name: "Lapor",
		key: "/report",
		icon: FileOutlined,
	},
	{
		roles: [1, 2, 3, 4, 5, 6, 7],
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
		roles: [1, 2, 3, 4, 5, 6, 7],
		name: "Settings",
		key: "/settings",
		icon: SettingOutlined,
	},
];
