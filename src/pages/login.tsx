import React from "react";
// import { Container, H1, Space } from "cherry-components";
import { Page } from "../components/Page";
import Login from "components/Login";

function Index() {
	return (
		<Page title="Home" description="Hello world">
			<Login />
		</Page>
	);
}

export default Index;
