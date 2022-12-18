import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { StyledDiv } from "..";
const antIcon = (
	<LoadingOutlined
		style={{
			fontSize: 30,
		}}
		spin
	/>
);
const Loading = () => (
	<StyledDiv textAlign="center">
		<Spin indicator={antIcon} />
	</StyledDiv>
);

export default Loading;
