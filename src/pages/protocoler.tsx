import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { Page } from "../components/Page";
import Protocol from "components/Protocol";
import withLayout from "helpers/withLayout";

function Index() {
	return (
		<Page title="Agenda" description="Atur Agenda">
			<Breadcrumb separator="/" style={{ marginBottom: "20px" }}>
				<Breadcrumb.Item>
					<Link href="/">Dashboard</Link>
				</Breadcrumb.Item>
				<Breadcrumb.Item>Kegiatan</Breadcrumb.Item>
			</Breadcrumb>
			<Protocol />
		</Page>
	);
}

export default withLayout(Index, true);
