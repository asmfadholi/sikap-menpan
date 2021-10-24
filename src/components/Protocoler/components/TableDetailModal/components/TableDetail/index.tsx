import React from "react";
import { Table } from "antd";
import { TableProps } from "antd/lib/table";
import { useProtocolarActivityList } from "hooks/useProtocolarActivityList";

// connfiguration
import tableConfig from "./tableConfig";

const TableDashboard = ({ data }) => {
	const init = { userId: data.userId };
	const { data: responseData, loading } = useProtocolarActivityList(init);
	const { list } = responseData;
	const config = tableConfig();

	const propsDataTable = {
		rowKey: "id",
		loading,
		dataSource: list,
		...config,
	} as TableProps<any>;

	return <Table {...propsDataTable} />;
};

export default TableDashboard;
