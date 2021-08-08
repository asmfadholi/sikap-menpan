import React from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { Page } from "../components/Page";
import Assessment from "components/Assessment";
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
			<Assessment />
		</Page>
	);
}

export default withLayout(Index, true);
