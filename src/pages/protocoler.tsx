import React from "react";
import { Page } from "../components/Page";
import Protocoler from "components/Protocoler";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Protocoler />
		</Page>
	);
}

export default withLayout(Index, true);
