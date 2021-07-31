import React, { useEffect, useState } from "react";
import { Layout, Menu, Button, Modal, message, Row, Col } from "antd";
import NProgress from "nprogress";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";

// hooks
import { useAuthStates } from "contexts/Auth";

// styles
import { stySider, styLogout } from "./styles";

import configMenu from "./configMenu";

const { Header, Sider, Content } = Layout;

interface generateMenuInterface {
	name: string;
	key: string;
	icon: any;
}

const generateMenu = ({ name, key, icon: Icon }: generateMenuInterface) => {
	return (
		<Menu.Item key={key} icon={<Icon />}>
			{name}
		</Menu.Item>
	);
};

const Authorized = ({ children }) => {
	const { replace, push, pathname, events } = useRouter();
	const { dispatch } = useAuthStates();
	const [collapse, setCollapse] = useState(false);
	const [selectedKeys, setSelectedKeys] = useState([]);

	const toggle = () => {
		setCollapse((prev) => !prev);
	};

	useEffect(() => {
		setSelectedKeys([pathname]);
	}, [pathname]);

	const doLogout = async () => {
		const promise = await new Promise((resolve) => {
			setTimeout(() => {
				dispatch({ type: "logout" });
				replace("/login");
				resolve(true);
				events.on("routeChangeComplete", () => {
					NProgress.done();
					localStorage.removeItem("auth");
				});
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
			<Row>
				<Col span={0} sm={24}>
					<Sider
						trigger={null}
						collapsible
						collapsed={collapse}
						style={{ minHeight: "100vh", height: "100%" }}
					>
						<div className="logo-sidebar" />
						<Menu
							theme="dark"
							mode="inline"
							selectedKeys={selectedKeys}
							onSelect={handleSelect}
						>
							{configMenu.map(generateMenu)}
						</Menu>
					</Sider>
				</Col>
			</Row>

			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{ padding: 0 }}
				>
					<Row>
						<Col span={0} sm={12}>
							{React.createElement(
								collapse
									? MenuUnfoldOutlined
									: MenuFoldOutlined,
								{
									className: "trigger",
									onClick: toggle,
								},
							)}
						</Col>
						<Col span={12} sm={0}>
							<Menu
								theme="light"
								mode="horizontal"
								selectedKeys={selectedKeys}
								onSelect={handleSelect}
							>
								{configMenu.map(generateMenu)}
							</Menu>
						</Col>
						<Col span={12}>
							<Button
								danger
								type="link"
								css={styLogout}
								onClick={handleLogout}
							>
								Logout <LogoutOutlined />
							</Button>
						</Col>
					</Row>
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
