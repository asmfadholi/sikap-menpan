import React from "react";
// import { Container, H1, Space } from "cherry-components";
import { Page } from "../components/Page";
import Login from "components/Login";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Login" description="Menpan">
			<Login />
		</Page>
	);
}

export default withLayout(Index, false);
