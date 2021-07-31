import React from "react";
import { Modal } from "antd";

interface CreationModalInterface {
	visible: boolean;
	setVisible: (arg: boolean) => void;
}

const CreationModal = ({ visible, setVisible }: CreationModalInterface) => {
	return (
		<Modal
			visible={visible}
			title="syalalal"
			onCancel={() => setVisible(false)}
			onOk={() => setVisible(false)}
		>
			come on
		</Modal>
	);
};

export default CreationModal;
