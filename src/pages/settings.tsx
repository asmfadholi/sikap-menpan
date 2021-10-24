import React from "react";
import { Page } from "../components/Page";
import Settings from "components/Settings";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Settings" description="Setting user">
			<Settings />
		</Page>
	);
}

export default withLayout(Index, true);
