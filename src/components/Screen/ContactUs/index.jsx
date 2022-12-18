import {
	StyledCustomBtn,
	StyledCol,
	StyledRow,
	StyledCustomInput,
	StyledH3,
	StyledDiv,
	StyledCustomTextArea,
} from "@/components/Common";
import { Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import ContactUsStack from "@/components/Common/ContactUsStack";
import GoogleMapReact from "google-map-react";
import { useSendTicket } from "@/api/api.contactUs";
const { Item } = Form;
const ContactUs = () => {
	const { isLoading, mutateAsync } = useSendTicket();
	const onFinish = data => mutateAsync(data);
	return (
		<StyledRow>
			<StyledCol md={12} xs={24} p="15px">
				<ContactUsStack />
				<StyledH3 fontSize="18px" color="#002434" textAlign="center" mt="50px">
					if you got any questions <br />
					please do not hesitate to send us a message
				</StyledH3>
				<Form name="contactUs" autoComplete="off" onFinish={onFinish}>
					<Item name="name" rules={[{ required: true }]}>
						<StyledCustomInput placeholder="Full Name" perfix={<UserOutlined />} />
					</Item>
					<Item name="email" rules={[{ required: true, type: "email" }]}>
						<StyledCustomInput placeholder="Your Mail" />
					</Item>
					<Item name="ticketDescription" rules={[{ required: true }]}>
						<StyledCustomTextArea placeholder="Message" autoSize={{ minRows: 6 }} />
					</Item>
					<StyledDiv display="flex" justifyContent="center">
						<StyledCustomBtn fontSize="12px" htmlType="submit" loading={isLoading}>
							send message
						</StyledCustomBtn>
					</StyledDiv>
				</Form>
			</StyledCol>
			<StyledCol md={12} xs={24} p="15px">
				<GoogleMapReact
					bootstrapURLKeys={{ key: "" }}
					defaultCenter={{
						lat: 10.99835602,
						lng: 77.01502627,
					}}
					defaultZoom={11}
				/>
			</StyledCol>
		</StyledRow>
	);
};

export default ContactUs;
