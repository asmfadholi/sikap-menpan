import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";

// connfiguration
import tableConfig from "./tableConfig";

const TableDashboard = ({ list }) => {
	const config = tableConfig();

	const propsDataTable = {
		rowKey: "id",
		loading: false,
		dataSource: list,
		// onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	return <Table {...propsDataTable} />;
};

export default TableDashboard;
