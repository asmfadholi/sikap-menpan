import React, { useState } from "react";
import moment from "moment";
import {
	Modal,
	Form,
	Input,
	Button,
	Collapse,
	message,
	InputNumber,
	Empty,
} from "antd";
import DetailReportModal from "../DetailReportModal";
import { useAssessProtocol } from "hooks/useAssessProtocol";

const { Panel } = Collapse;

const sanitizeData = (data) => {
	const { startDate = "", endDate = "" } = data;
	if (!startDate || !endDate) return {};
	const newData = {
		...data,
		startDate: moment(startDate),
		endDate: moment(endDate),
	};
	return newData;
};

const required = {
	required: true,
	message: "Wajib diisi",
};

const CreationModal = ({ visible, setVisible, mode, data, refetch }: any) => {
	const { Protocolers = [], activityName = "" } = data;
	const [visibleDetail, setVisibleDetail] = useState(false);
	const [currentData, setCurrentData] = useState({});
	const [form] = Form.useForm();
	const isCreate = mode === "create";
	const [assessProtocolar] = useAssessProtocol();
	const title = `Penilaian Protokoler di kegiatan ${activityName}`;

	const handleOnFinish = async (val) => {
		const { activityId } = data;

		const body = Protocolers.map((protocol) => {
			const { userId } = protocol;
			const reviewRate = val[`reviewRate${userId}`];
			const reviewDescription = val[`reviewDescription${userId}`];
			return {
				activityId,
				reviewRate,
				reviewDescription,
				reviewTypeId: 1,
				userId,
			};
		});
		setVisible(false);
		const { success } = await assessProtocolar({ body });
		if (success) {
			message.success("Berhasil Memberikan penilaian");
			refetch({});
		}
		setVisible(false);
	};

	const onHandleCancel = () => {
		form.resetFields();
		setVisible(false);
	};

	return (
		<>
			{Boolean(visibleDetail) && (
				<DetailReportModal
					visible={visibleDetail}
					data={{ ...currentData, activityId: data.activityId }}
					setVisible={setVisibleDetail}
				/>
			)}

			<Modal
				visible={visible}
				title={title}
				width={600}
				onCancel={onHandleCancel}
				footer={null}
			>
				<Form
					form={form}
					layout="vertical"
					initialValues={!isCreate ? sanitizeData(data) : {}}
					onFinish={handleOnFinish}
				>
					{!Protocolers.length && (
						<Empty description="Anggota protokoler tidak ditemukan" />
					)}
					{Boolean(Protocolers.length) && (
						<Collapse defaultActiveKey={[Protocolers[0].userId]}>
							{Protocolers.map((protocol, idx) => {
								const { userName = "", userId } = protocol;
							
								return (
									<Panel
										header={`Protokoler ${
											idx + 1
										} (${userName})`}
										key={userId}
									>
										<Button
											type="primary"
											size="small"
											onClick={() => {
												setCurrentData(protocol);
												setVisibleDetail(true);
											}}
										>
											Detail Laporan
										</Button>
										<br />
										<br />
										<Form.Item
											label="Penilaian"
											rules={[required]}
											name={`reviewRate${userId}`}
										>
											<InputNumber
												style={{ width: "100%" }}
												placeholder="Masukkan nilai dari 1-10"
											/>
										</Form.Item>
										<Form.Item
											label="Catatan"
											name={`reviewDescription${userId}`}
										>
											<Input.TextArea placeholder="Masukkan catatan" />
										</Form.Item>
									</Panel>
								);
							})}
						</Collapse>
					)}

					<br />

					<Form.Item noStyle shouldUpdate>
						{() => {
							return (
								Boolean(Protocolers.length) && (
									<Button
										type="primary"
										htmlType="submit"
										style={{ width: "100%" }}
									>
										Simpan
									</Button>
								)
							);
						}}
					</Form.Item>
				</Form>
			</Modal>
		</>
	);
};

export default CreationModal;
