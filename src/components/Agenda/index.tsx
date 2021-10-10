import React, { useState } from "react";
import {
	Row,
	Button,
	Col,
	Table,
	Space,
	message,
	Input,
	Typography,
} from "antd";
import {
	FilterOutlined,
	DownloadOutlined,
	SyncOutlined,
} from "@ant-design/icons";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// hooks
import { useActivity } from "hooks/useActivity";

// connfiguration
import tableConfig from "./tableConfig";

// components
const CreationModal = dynamic(import("./components/CreationModal"));

const TableDashboard = () => {
	const {
		loading,
		data: responseData,
		handleFilter,
		params,
	} = useActivity({ status: "Draft" });
	const { activities: dataSource } = responseData;
	const [visibleModal, setVisibleModal] = useState(false);
	const [mode, setMode] = useState("create");
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		data: { ...responseData, ...params },
		refetch: handleFilter,
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
		dataSource,
		onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	const handleSync = () => {
		message.success("Berhasil tarik data sigeta");
	};

	const handleDownloadTemplate = () => {
		message.success("Berhasil download template csv");
	};

	const handleButtonClick = () => {
		message.success("Berhasil upload csv");
	};

	const handleOnSearch = (val) => {
		handleFilter({ search: val, page: 1, limit: 10 });
	};

	return (
		<div style={{ minHeight: "100vh" }}>
			<Typography.Title level={2} style={{ marginBottom: "19px" }}>
				Daftar Kegiatan{" "}
			</Typography.Title>

			<Row gutter={[16, 16]}>
				<Col span={24} lg={12}>
					<Space size={16} wrap>
						<Input.Search
							placeholder="Cari kegiatan disini..."
							style={{ maxWidth: "350px" }}
							onSearch={handleOnSearch}
						/>
						<Button icon={<FilterOutlined />}>Filters </Button>
					</Space>
				</Col>
				<Col
					span={24}
					lg={12}
					style={{ display: "flex", justifyContent: "flex-end" }}
				>
					<Space size={16} wrap style={{ marginBottom: "12px" }}>
						<Button onClick={handleSync} icon={<SyncOutlined />}>
							Tarik Data Sigeta
						</Button>
						<div>
							<Button onClick={handleButtonClick}>
								Upload CSV
							</Button>
							<Button
								onClick={handleDownloadTemplate}
								style={{ padding: "0 10px" }}
							>
								<DownloadOutlined />
							</Button>
						</div>

						<Button
							type="primary"
							style={{ width: "100%" }}
							onClick={handleClickNew}
						>
							Buat Agenda Baru
						</Button>
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
