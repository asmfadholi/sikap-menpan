import React from "react";
import { Page } from "../components/Page";
import Assessment from "components/Assessment";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Assessment />
		</Page>
	);
}

export default withLayout(Index, true);
