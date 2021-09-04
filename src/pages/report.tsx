import React from "react";
import { Page } from "../components/Page";
import Protocol from "components/Report";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Protocol />
		</Page>
	);
}

export default withLayout(Index, true);
