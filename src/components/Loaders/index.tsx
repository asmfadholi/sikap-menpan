import { Space, Spin } from "antd";

//styles
import { styFlexCentered } from "./styles";

function Loaders() {
	return (
		<div css={styFlexCentered}>
			<Space size={10} align="center" direction="vertical">
				<Spin />
				Mohon tunggu sebentar...
			</Space>
		</div>
	);
}

export default Loaders;
