import { useAuth } from "@/api/api.auth";
import {
	StyledA,
	StyledCol,
	StyledCustomBtn,
	StyledCustomInput,
	StyledDiv,
	StyledRow,
	StyledText,
} from "@/components/Common";
import { setToken } from "@/utils/auth.utils";
import { KeyOutlined, UserOutlined } from "@ant-design/icons";
import { Form } from "antd";
const { Item } = Form;

const Login = () => {
	const { isLoading, mutateAsync } = useAuth();
	const onFinish = data => mutateAsync(data);

	return (
		<StyledRow justify="center">
			<StyledCol lg={14} xs={24}>
				<Form name="login" autoComplete="off" layout="vertical" onFinish={onFinish}>
					<Item
						name="userName"
						label={
							<StyledText color="#002434" fontSize="18px">
								User Name <UserOutlined />
							</StyledText>
						}
						rules={[{ required: true }]}
					>
						<StyledCustomInput placeholder="Type ..." />
					</Item>
					<Item
						name="password"
						label={
							<StyledText color="#002434" fontSize="18px">
								Password <KeyOutlined />
							</StyledText>
						}
						rules={[{ required: true }]}
					>
						<StyledCustomInput placeholder="Type ..." />
					</Item>

					<StyledDiv display="flex" justifyContent="center" mt="50px">
						<StyledCustomBtn fontSize="12px" htmlType="submit" loading={isLoading}>
							LOG IN
						</StyledCustomBtn>
					</StyledDiv>
				</Form>
			</StyledCol>
		</StyledRow>
	);
};

export default Login;
