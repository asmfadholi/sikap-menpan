import React, { useState } from "react";
import { Row, Input, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";
// hooks
import { useActivityByAdmin } from "hooks/useActivityLaporByAdmin";
import { useActivityLaporByProtocolar } from "hooks/useActivityLaporByProtocolar";
import { useActivityLaporByDihadiri } from "hooks/useActivityLaporByDihadiri";
// connfiguration
import tableConfig from "./tableConfig";
import { ROLES } from "constants/role";

const getRole = () => localStorage.getItem("roleId") || 0;

// components
const CreationModal = dynamic(import("./components/CreationModal"));
const TableDashboard = () => {
	const role = getRole();
	let useActivity = useActivityByAdmin;

	const isAdmin = role === ROLES.ADMIN || role === ROLES.SUPER_ADMIN;
	const isProtocolar = role === ROLES.PROTOCOLAR;
	const isDihadiri = role === ROLES.PESERTA;

	if (isAdmin) useActivity = useActivityByAdmin;
	if (isProtocolar) useActivity = useActivityLaporByProtocolar;
	if (isDihadiri) useActivity = useActivityLaporByDihadiri;

	const { data: responseData, params, handleFilter, loading } = useActivity();
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
		handleFilter({ search: val, page: 1, limit: 10 });
	};

	const propsDataTable = {
		rowKey: "id",
		loading,
		dataSource,
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
				onSearch={handleOnChange}
			/>
			<br />
			<Table {...propsDataTable} />
			{visibleModal && !isFirstModal && (
				<CreationModal
					data={{ ...data, handleFilter }}
					mode={mode}
					visible={visibleModal}
					setVisible={setVisibleModal}
				/>
			)}
		</div>
	);
};

export default TableDashboard;
