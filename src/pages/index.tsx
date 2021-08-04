import React from "react";
import { Page } from "../components/Page";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Home" description="Menpan">
			Dashboard
		</Page>
	);
}

export default withLayout(Index, true);
