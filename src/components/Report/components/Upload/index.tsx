import React, { useState } from "react";
import { Modal, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const getBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = (error) => reject(error);
	});
};

const uploadButton = (
	<div>
		<PlusOutlined />
		<div style={{ marginTop: 8 }}>Upload</div>
	</div>
);

const UploadImage = ({ onChange }) => {
	const [fileList, setFileList] = useState([]);
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState("");
	const [previewTitle, setPreviewTitle] = useState("");

	const handlePreview = async (file) => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewVisible(true);
		setPreviewImage(file.url || file.preview);
		setPreviewTitle(
			file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
		);
	};

	const handleChange = ({ fileList }) => {
		setFileList(fileList);
		onChange(fileList);
	};
	const handleCancel = () => setPreviewVisible(false);

	return (
		<div>
			<Upload
				listType="picture-card"
				fileList={fileList}
				beforeUpload={() => false}
				onPreview={handlePreview}
				onChange={handleChange}
			>
				{fileList.length >= 1 ? null : uploadButton}
			</Upload>
			<Modal
				visible={previewVisible}
				title={previewTitle}
				footer={null}
				onCancel={handleCancel}
			>
				<img
					alt="example"
					style={{ width: "100%" }}
					src={previewImage}
				/>
			</Modal>
		</div>
	);
};

export default UploadImage;
