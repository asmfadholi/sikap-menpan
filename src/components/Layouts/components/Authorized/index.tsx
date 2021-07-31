import React, { useState } from "react";
import { Layout, Menu, Button, Modal, message } from "antd";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	AuditOutlined,
	UserOutlined,
	// VideoCameraOutlined,
	// UploadOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

// hooks
import { useAuthStates } from "contexts/Auth";

// styles
import { stySider, styLogout } from "./styles";

const { Header, Sider, Content } = Layout;

const Authorized = ({ children, setLoading }) => {
	const { replace, push } = useRouter();
	const { dispatch } = useAuthStates();
	const [collapse, setCollapse] = useState(false);

	const toggle = () => {
		setCollapse((prev) => !prev);
	};

	const doLogout = async () => {
		const promise = await new Promise((resolve) => {
			setTimeout(() => {
				dispatch({ type: "logout" });
				replace("/login");
				resolve(true);
				setLoading(true);
				localStorage.removeItem("auth");

				setTimeout(() => {
					setLoading(false);
				}, 700);
			}, 1000);
		});
		message.success("Berhasil Keluar");
		return promise;
	};

	const handleLogout = () => {
		Modal.confirm({
			title: "Apakah kamu yakin ingin keluar?",
			okText: "Yakin",
			cancelText: "Tidak",
			onOk: doLogout,
		});
	};

	const handleSelect = (res) => push(res.key);

	return (
		<Layout css={stySider}>
			<Sider trigger={null} collapsible collapsed={collapse}>
				<div className="logo-sidebar" />
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={["/"]}
					onSelect={handleSelect}
				>
					<Menu.Item key="/" icon={<UserOutlined />}>
						Dashboard
					</Menu.Item>
					<Menu.Item key="/agenda" icon={<AuditOutlined />}>
						Agenda
					</Menu.Item>
					{/* <Menu.Item key="2" icon={<VideoCameraOutlined />}>
						nav 2
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item> */}
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{ padding: 0 }}
				>
					{React.createElement(
						collapse ? MenuUnfoldOutlined : MenuFoldOutlined,
						{
							className: "trigger",
							onClick: toggle,
						},
					)}
					<Button
						danger
						type="link"
						css={styLogout}
						onClick={handleLogout}
					>
						Logout <LogoutOutlined />
					</Button>
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: "24px 16px",
						padding: 24,
						minHeight: 280,
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default Authorized;
