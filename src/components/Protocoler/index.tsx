import React, { useState } from "react";
import { Row, Input, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// connfiguration
import tableConfig from "./tableConfig";

// mocks
import { LIST } from "./__mocks_data__/list";

// components
const TableDetailModal = dynamic(import("./components/TableDetailModal"));

const TableDashboard = () => {
	// const { loading, list: dataSource } = useActivity();
	const [visibleModal, setVisibleModal] = useState(false);
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		setData,
		setVisibleModal,
		setIsFirstModal,
	});

	// const handleOnChange = (payload) => {
	// 	const { current = 1 } = payload;
	// 	const req = { page: current };
	// 	handleFilter(req);
	// };

	const propsDataTable = {
		rowKey: "id",
		loading: false,
		dataSource: LIST,
		// onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	return (
		<div style={{ minHeight: "100vh" }}>
			<Row>
				<Col span={24}>
					<h2>Daftar Kegiatan</h2>
				</Col>
			</Row>
			<Input.Search
				placeholder="Cari kegiatan..."
				style={{ maxWidth: "350px", marginBottom: "16px" }}
			/>
			<br />
			<Table {...propsDataTable} />
			{visibleModal && !isFirstModal && (
				<TableDetailModal
					data={data}
					visible={visibleModal}
					setVisible={setVisibleModal}
				/>
			)}
		</div>
	);
};

export default TableDashboard;
