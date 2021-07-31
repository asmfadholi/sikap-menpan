import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// images
import bgImage from "assets/images/login-bg.jpeg";
import logo from "assets/images/logo.png";

// hooks
import { useAuthStates } from "contexts/Auth";

// styles
import {
	stySideImage,
	styFormContainer,
	styLogo,
	// styFlexCentered,
} from "./styles";

const Login = () => {
	const { dispatch } = useAuthStates();
	const { push, events } = useRouter();
	const [loading, setLoading] = useState(false);

	const handleFinish = (res: { email: string; password: string }) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			dispatch({ type: "login" });
			message.success("Berhasil Login");
			push("/");
			events.on("routeChangeComplete", () => {
				NProgress.done();
				localStorage.setItem("auth", JSON.stringify(res));
			});
		}, 1000);
	};

	return (
		<Row style={{ minHeight: "100vh" }}>
			<Col span={0} sm={16} css={stySideImage}>
				<Image
					src={bgImage}
					alt=""
					role="presentation"
					placeholder="blur"
				/>
				<div className="mask"></div>
			</Col>
			<Col span={24} sm={8} css={styFormContainer}>
				<Form
					name="normal_login"
					className="login-form"
					// initialValues={{
					// 	remember: true,
					// }}
					onFinish={handleFinish}
					style={{
						width: 350,
						padding: 20,
						margin: "0 auto 40px",
						borderRadius: 4,
					}}
					size="large"
				>
					<div css={styLogo}>
						<Image
							src={logo}
							alt=""
							role="presentation"
							placeholder="blur"
						/>
					</div>
					<Form.Item
						name="email"
						rules={[
							{
								type: "email",
								message: "The input is not valid E-mail!",
							},
							{
								required: true,
								message: "Please input your E-mail!",
							},
						]}
					>
						<Input prefix={<UserOutlined />} placeholder="Email" />
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!",
							},
						]}
					>
						<Input.Password
							prefix={<LockOutlined />}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					{/* <Form.Item>
						<div css={styFlexCentered}>
							<Link href="/forgot-password">
								<a>Forgot password</a>
							</Link>
						</div>
					</Form.Item> */}

					<Button
						type="primary"
						block
						htmlType="submit"
						loading={loading}
					>
						Login
					</Button>
				</Form>
			</Col>
		</Row>
	);
};

export default Login;
