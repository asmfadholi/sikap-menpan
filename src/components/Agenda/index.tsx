import React, { useState } from "react";
import { Row, Button, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// hooks
import useAgendaList from "hooks/useAgendaList";

// connfiguration
import tableConfig from "./tableConfig";

// components
const CreationModal = dynamic(import("./components/CreationModal"));

const TableDashboard = () => {
	const {
		loading,
		list: dataSource,
		handleFilter,
		total,
		page,
	} = useAgendaList();
	const [visibleModal, setVisibleModal] = useState(false);
	const [mode, setMode] = useState("create");
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		total,
		page,
		setData,
		setMode,
		setVisibleModal,
		setIsFirstModal,
	});

	const handleOnChange = (payload) => {
		const { current = 1 } = payload;
		const req = { page: current };
		handleFilter(req);
	};

	const handleClickNew = () => {
		setData({});
		setMode("create");
		setIsFirstModal(false);
		setVisibleModal(true);
	};

	const propsDataTable = {
		rowKey: "id",
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
					<Button
						type="primary"
						style={{ width: "240px" }}
						onClick={handleClickNew}
					>
						Buat Agenda Baru
					</Button>
				</Col>
			</Row>
			<Table {...propsDataTable} />
			{!isFirstModal && (
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
