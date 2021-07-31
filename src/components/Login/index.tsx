import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

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
	const { dispatch, setLoading: setLoadingAuth } = useAuthStates();
	const { push } = useRouter();
	const [loading, setLoading] = useState(false);

	const handleFinish = (res: { email: string; password: string }) => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setLoadingAuth(true);
			dispatch({ type: "login" });
			message.success("Berhasil Login");
			push("/");
			localStorage.setItem("auth", JSON.stringify(res));
			setTimeout(() => {
				setLoadingAuth(false);
			}, 1000);
		}, 1000);
	};

	return (
		<Row gutter={16}>
			<Col span={16} css={stySideImage}>
				<Image src={bgImage} alt="" role="presentation" />
				<div className="mask"></div>
			</Col>
			<Col span={8} css={styFormContainer}>
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
						<Image src={logo} alt="" role="presentation" />
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