import React from "react";
import { Page } from "../components/Page";
import withLayout from "helpers/withLayout";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(
	() => import("components/Dashboard"),
	{
		ssr: false,
	},
);

function Index() {
	return (
		<Page title="Home" description="Menpan">
			<DynamicComponentWithNoSSR />
		</Page>
	);
}

export default withLayout(Index, true);
