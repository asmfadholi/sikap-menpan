import React, { useState } from "react";
import { Row, Input, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// hooks
import { useActivity } from "hooks/useActivity";

// connfiguration
import tableConfig from "./tableConfig";

// components
const CreationModal = dynamic(import("./components/CreationModal"));

const TableDashboard = () => {
	const init = { status: "Menugaskan,Draft.Menugaskan" };
	const {
		loading,
		data: responseData,
		handleFilter,
		params,
	} = useActivity(init);
	const { activities: dataSource } = responseData;
	const [visibleModal, setVisibleModal] = useState(false);
	const [mode, setMode] = useState("create");
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		data: { ...responseData, ...params },
		setData,
		setMode,
		setVisibleModal,
		setIsFirstModal,
	});

	const handleOnChange = (val) => {
		const { current: page, pageSize: limit } = val;
		handleFilter({ ...params, page, limit });
	};

	const propsDataTable = {
		rowKey: "id",
		loading,
		onChange: handleOnChange,
		dataSource,
		...config,
	} as TableProps<any>;

	const handleOnSearch = (val) => {
		handleFilter({ search: val, page: 1, limit: 10 });
	};

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
				onSearch={handleOnSearch}
			/>
			<br />
			<Table {...propsDataTable} />
			{visibleModal && !isFirstModal && (
				<CreationModal
					data={data}
					mode={mode}
					visible={visibleModal}
					setVisible={setVisibleModal}
				/>
			)}
		</div>
	);
};

export default TableDashboard;
