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
import { useState } from "react";
const { Item } = Form;

const Login = () => {
	const [message, setMessage] = useState('');
	const setErrorMessage = (value) => setMessage(value);
	const { isLoading, mutateAsync } = useAuth(setErrorMessage);
	const onFinish = data => mutateAsync(data,);
	return (
		<StyledRow justify="center">
			<StyledCol lg={14} xs={24}>
				<Form name="login" autoComplete="off" layout="vertical" onFinish={onFinish}>
					<Item
						name="username"
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
					<StyledDiv display="flex" justifyContent="center" mt="24px">
						{message && <StyledText color="#a50101" fontSize="14px">{message}</StyledText>}
					</StyledDiv>

				</Form>
			</StyledCol>
		</StyledRow>
	);
};

export default Login;
