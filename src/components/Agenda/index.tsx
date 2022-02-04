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
	Upload,
} from "antd";
import {
	FilterOutlined,
	DownloadOutlined,
	SyncOutlined,
} from "@ant-design/icons";
import { TableProps } from "antd/lib/table";
import { useAddActivityByCSV } from "hooks/useAddActivityByCSV";
import { useDownloadFormatCsv } from "hooks/useDownloadFormatCsv";

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
	const { uploadCsv, loading: loadingCSV } = useAddActivityByCSV();
	const { downloadCsv, loading: loadingDownloadCsv } = useDownloadFormatCsv();
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

	const handleOnSearch = (val) => {
		handleFilter({ search: val, page: 1, limit: 10 });
	};

	const propsUpload = {
		name: "uploadFile",
		accept: ".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",
		action: (file) => file,
		showUploadList: false,
		beforeUpload: () => false,
		onChange(info) {
			const { file = null } = info;
			if (file) {
				const newFormData = new FormData();
				newFormData.append("filecsv", file);
				uploadCsv(newFormData);
			}
			return info;
		},
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
							<Upload {...propsUpload} disabled={loadingCSV}>
								<Button loading={loadingCSV}>
									{!loadingCSV
										? "Upload CSV"
										: "Uploading..."}
								</Button>
							</Upload>

							<Button
								loading={loadingDownloadCsv}
								onClick={downloadCsv}
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
