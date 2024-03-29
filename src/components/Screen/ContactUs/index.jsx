import React from "react";
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
import { UserOutlined, EnvironmentOutlined } from "@ant-design/icons";
import ContactUsStack from "@/components/Common/ContactUsStack";
import { useSendTicket } from "@/api/api.contactUs";
import { Map, Marker } from "pigeon-maps"

const { Item } = Form;

const ContactUs = () => {
	const { isLoading, mutateAsync } = useSendTicket();
	const onFinish = data => mutateAsync(data);
	const lat = 35.805392137902984;
	const lng = 51.48235581377283;
	return (
		<StyledRow>
			<StyledCol md={14} xs={24} p="15px">
				<ContactUsStack />
				<StyledH3 fontSize="18px" color="#002434" fontWeight='500' textAlign="center" mt="50px">
					If You Got Any Questions <br />
					Please Do Not Hesitate To Send Us A Message
				</StyledH3>
				<Form name="contactUs" autoComplete="off" onFinish={onFinish}>
					<Item name="name" rules={[{ required: true }]}>
						<StyledCustomInput placeholder={"Full Name"} perfix={<UserOutlined />} />
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
			<StyledCol md={10} xs={24} p="15px" style={{ minHeight: '150px' }}>
				<Map defaultCenter={[lat, lng]} defaultZoom={14}>
					<Marker width={38} anchor={[lat, lng]} color="#d42a1b" />
				</Map>
			</StyledCol>
		</StyledRow>
	);
};

export default ContactUs;
