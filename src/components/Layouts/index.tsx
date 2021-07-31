import React from "react";
import { Spin, Space } from "antd";
import Authorizhed from "./components/Authorized";
import Unauthorizhed from "./components/Unauthorized";

// hooks
import useAuthValidation from "hooks/useAuthValidation";

// styles
import { styFlexCentered } from "./styles";

const Layouts = ({ children }) => {
	const authValidation = useAuthValidation();
	const { loading, isLoggedIn, setLoading } = authValidation;

	if (loading) {
		return (
			<div css={styFlexCentered}>
				<Space size={10} align="center" direction="vertical">
					<Spin />
					Mohon tunggu sebentar...
				</Space>
			</div>
		);
	}

	if (!loading && isLoggedIn) {
		return <Authorizhed setLoading={setLoading}>{children}</Authorizhed>;
	}

	if (!loading && !isLoggedIn) {
		return <Unauthorizhed>{children}</Unauthorizhed>;
	}
};

export default Layouts;
