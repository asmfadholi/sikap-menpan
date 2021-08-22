import React, { useState } from "react";
import {
	Row,
	Button,
	Col,
	Table,
	Space,
	Dropdown,
	Menu,
	message,
	Input,
} from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// hooks
import { useActivity } from "hooks/useActivity";

// connfiguration
import tableConfig from "./tableConfig";

// components
const CreationModal = dynamic(import("./components/CreationModal"));

const TableDashboard = () => {
	const { loading, list: dataSource, refetch } = useActivity();
	const [visibleModal, setVisibleModal] = useState(false);
	const [mode, setMode] = useState("create");
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		// total,
		// page,
		setData,
		setMode,
		setVisibleModal,
		setIsFirstModal,
	});

	// const handleOnChange = (payload) => {
	// 	const { current = 1 } = payload;
	// 	const req = { page: current };
	// 	refetch(req);
	// };

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
		// onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	const handleMenuClick = () => {
		message.success("Berhasil download template csv");
	};

	const menu = (
		<Menu onClick={handleMenuClick}>
			<Menu.Item key="1">Download Template</Menu.Item>
		</Menu>
	);

	const handleButtonClick = () => {
		message.success("Berhasil upload csv");
	};

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
					<Space size={16}>
						<Dropdown.Button
							onClick={handleButtonClick}
							overlay={menu}
						>
							Upload CSV
						</Dropdown.Button>
						<Button
							type="primary"
							style={{ width: "240px" }}
							onClick={handleClickNew}
						>
							Buat Agenda Baru
						</Button>
					</Space>
				</Col>
			</Row>
			<Input.Search
				placeholder="Cari kegiatan..."
				style={{ maxWidth: "350px", marginBottom: "16px" }}
			/>
			<br />
			<Table {...propsDataTable} />
			{visibleModal && !isFirstModal && (
				<CreationModal
					data={data}
					mode={mode}
					refetch={refetch}
					visible={visibleModal}
					setVisible={setVisibleModal}
				/>
			)}
		</div>
	);
};

export default TableDashboard;
