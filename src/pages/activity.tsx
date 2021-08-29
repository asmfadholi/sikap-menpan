import React from "react";
import { Page } from "../components/Page";
import Agenda from "components/Agenda";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Agenda />
		</Page>
	);
}

export default withLayout(Index, true);
