import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import NProgress from "nprogress";

import { Form, Input, Button, Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

// images
import bgImage from "assets/images/bg-image.jpeg";
import logoVertical from "assets/images/logo-sikap-vertical.png";

// hooks
import { useAuthStates } from "contexts/Auth";
import { useLogin } from "hooks/useLogin";

// styles
import { stySideImage, styFormContainer, styLogo } from "./styles";

// types
import { RequestBody } from "./types";

const Login = () => {
	const [handleLogin, { loading }]: any = useLogin();
	const { dispatch } = useAuthStates();
	const { push, events } = useRouter();

	const handleFinish = async (body: RequestBody) => {
		const { token, success, userEmail } = await handleLogin({ body });
		if (success) {
			dispatch({ type: "login" });
			events.on("routeChangeComplete", () => {
				NProgress.done();
				localStorage.setItem("auth", token);
				localStorage.setItem("userEmail", userEmail);
			});
			message.success("Berhasil Login");
			push("/");
		}
	};

	return (
		<Row style={{ minHeight: "100vh" }}>
			<Col span={0} sm={16}>
				<div css={stySideImage}>
					<Image
						src={bgImage}
						alt=""
						role="presentation"
						placeholder="blur"
					/>
					<div className="mask"></div>
				</div>

				{/* <div css={styBanner}>
					<Image
						src={banner}
						alt=""
						role="presentation"
						placeholder="blur"
					/>
				</div> */}
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
							src={logoVertical}
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
