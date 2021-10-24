import React, { useState } from "react";
import { Row, Button, Col, Table, Space, Input, Typography } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// hooks
import { useUserList } from "hooks/useUserList";
import { useUserListByRole } from "hooks/useUserListByRole";

// connfiguration
import tableConfig from "./tableConfig";

// components
const CreationModal = dynamic(import("./components/CreationModal"));
const isUserByRole = () => {
	const roleId = Number(localStorage.getItem("roleId"));
	return roleId !== 1 && roleId !== 2;
};

const TableDashboard = () => {
	const init = { page: 1, limit: 10 };
	const isUserByRoleAccess = isUserByRole();
	const { loading, list, handleFilter, params }: any = isUserByRoleAccess
		? useUserListByRole(init)
		: useUserList(init);
	const [visibleModal, setVisibleModal] = useState(false);
	const [mode, setMode] = useState("create");
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		data: { ...params },
		setData,
		setMode,
		setVisibleModal,
		setIsFirstModal,
	});

	const handleClickNew = () => {
		setData({});
		setMode("create");
		setIsFirstModal(false);
		setVisibleModal(true);
	};

	const handleOnChange = (val) => {
		const { current: page, pageSize: limit } = val;
		handleFilter({ ...params, page, limit });
	};

	const propsDataTable = {
		rowKey: "activityId",
		loading,
		dataSource: list,
		onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	const handleOnSearch = (val) => {
		handleFilter({ search: val, page: 1, limit: 10 });
	};

	return (
		<div style={{ minHeight: "100vh" }}>
			<Typography.Title level={2} style={{ marginBottom: "19px" }}>
				Daftar User{" "}
			</Typography.Title>

			<Row gutter={[16, 16]}>
				<Col span={24} lg={12}>
					{!isUserByRoleAccess && (
						<Input.Search
							placeholder="Cari user disini..."
							style={{ maxWidth: "350px" }}
							onSearch={handleOnSearch}
						/>
					)}
				</Col>
				<Col
					span={24}
					lg={12}
					style={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Space size={16} wrap style={{ marginBottom: "12px" }}>
						{!isUserByRoleAccess && (
							<Button
								type="primary"
								style={{ width: "100%" }}
								onClick={handleClickNew}
							>
								Buat User Baru
							</Button>
						)}
					</Space>
				</Col>
			</Row>
			<Table {...propsDataTable} />
			{visibleModal && !isFirstModal && (
				<CreationModal
					data={data}
					mode={mode}
					refetch={handleFilter}
					visible={visibleModal}
					setVisible={setVisibleModal}
				/>
			)}
		</div>
	);
};

export default TableDashboard;
