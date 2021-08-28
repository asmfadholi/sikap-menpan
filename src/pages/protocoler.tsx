import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { Page } from "../components/Page";
import Protocoler from "components/Protocoler";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Breadcrumb separator="/" style={{ marginBottom: "20px" }}>
				<Breadcrumb.Item>
					<Link href="/">Dashboard</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Protokoler</Breadcrumb.Item>
			</Breadcrumb>
			<Protocoler />
		</Page>
	);
}

export default withLayout(Index, true);
