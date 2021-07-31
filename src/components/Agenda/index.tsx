import React from "react";
import { Row, Button, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";

// hooks
import useAgendaList from "hooks/useAgendaList";

// connfiguration
import tableConfig from "./tableConfig";

const TableDashboard = () => {
	const {
		loading,
		list: dataSource,
		handleFilter,
		total,
		page,
	} = useAgendaList();
	const config = tableConfig({ total, page });

	const handleOnChange = (payload) => {
		const { current = 1 } = payload;
		const req = { page: current };
		handleFilter(req);
	};

	const propsDataTable = {
		loading,
		dataSource,
		onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	return (
		<div style={{ minHeight: "100vh" }}>
			<Row>
				<Col span={12}>
					<h2>Daftar Agenda</h2>
				</Col>
				<Col
					span={12}
					style={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Button type="primary" style={{ width: "240px" }}>
						Buat Agenda Baru
					</Button>
				</Col>
			</Row>
			<Table {...propsDataTable} />
		</div>
	);
};

export default TableDashboard;
