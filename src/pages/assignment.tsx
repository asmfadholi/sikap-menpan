import React from "react";
import { Page } from "../components/Page";
import Assign from "components/Assign";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Assign />
		</Page>
	);
}

export default withLayout(Index, true);
