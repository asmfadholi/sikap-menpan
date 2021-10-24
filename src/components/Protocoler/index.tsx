import React, { useState } from "react";
import { Row, Input, Col, Table } from "antd";
import { TableProps } from "antd/lib/table";
import dynamic from "next/dynamic";

// connfiguration
import tableConfig from "./tableConfig";
import { useProtocolarAssessmentList } from "hooks/useProtocolarAssessmentList";

// components
const TableDetailModal = dynamic(import("./components/TableDetailModal"));

// styles
import { styTable } from "./styles";

const TableDashboard = () => {
	const init = { limit: 10, page: 1 };
	const {
		data: responseData,
		handleFilter,
		params,
	} = useProtocolarAssessmentList(init);
	const { list: dataSource } = responseData;
	const [visibleModal, setVisibleModal] = useState(false);
	const [data, setData] = useState({});
	const [isFirstModal, setIsFirstModal] = useState(true);
	const config = tableConfig({
		setData,
		setVisibleModal,
		setIsFirstModal,
	});

	const handleOnChange = (val) => {
		const { current: page, pageSize: limit } = val;
		handleFilter({ ...params, page, limit });
	};

	const handleOnSearch = (val) => {
		handleFilter({ search: val, page: 1, limit: 10 });
	};

	const propsDataTable = {
		rowKey: "id",
		loading: false,
		dataSource,
		onChange: handleOnChange,
		...config,
	} as TableProps<any>;

	return (
		<div style={{ minHeight: "100vh" }}>
			<Row>
				<Col span={24}>
					<h2>Daftar Protokoler</h2>
				</Col>
			</Row>
			<Input.Search
				placeholder="Cari protokoler di sini..."
				style={{ maxWidth: "350px", marginBottom: "16px" }}
				onSearch={handleOnSearch}
			/>
			<br />
			<Table {...propsDataTable} css={styTable} />
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
