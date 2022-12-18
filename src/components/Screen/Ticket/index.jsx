import { useTicket } from "@/api/api.ticket";
import {
	StyledCol,
	StyledCustomBtn,
	StyledCustomInput,
	StyledCustomSelect,
	StyledCustomTextArea,
	StyledRow,
} from "@/components/Common";
import ComingSoon from "@/components/Common/ComingSoon";
import { ticketTypeOptions } from "@/utils/ticket";
import { Button, Form, message, Steps } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { Item } = Form;
const Ticket = () => {
	const router = useRouter();
	const [form] = Form.useForm();
	const { isLoading, mutateAsync } = useTicket();
	const { singleProduct } = useSelector(state => state.products);
	const { ticketType } = router.query;
	useEffect(() => {
		ticketType && form.setFieldValue("ticketType", ticketType);
	}, [ticketType]);
	const onFinish = data => mutateAsync({ ...data, productCategory: "" });
	if (ticketType === "download" || ticketType === "productInformation") return <ComingSoon />;
	return (
		<Form name="ticket-form" layout="vertical" form={form} onFinish={onFinish}>
			<StyledRow gutter={[16, 16]}>
				<StyledCol md={5} xs={24}>
					<Item name="ticketType" label="Ticket Type" rules={[{ required: true }]}>
						<StyledCustomSelect options={ticketTypeOptions} />
					</Item>
				</StyledCol>
				<StyledCol md={5} xs={24}>
					<Item name="email" label="email" rules={[{ required: true }, { type: "email" }]}>
						<StyledCustomInput />
					</Item>
				</StyledCol>
				<StyledCol md={5} xs={24}>
					<Item name="companyNumbaer" label="Company Numbaer" rules={[{ required: true }]}>
						<StyledCustomInput />
					</Item>
				</StyledCol>
				<StyledCol md={5} xs={24}>
					<Item name="companyName" label="Company Name" rules={[{ required: true }]}>
						<StyledCustomInput />
					</Item>
				</StyledCol>
				<StyledCol md={12} xs={24}>
					<Item name="ticketDescription" label="Description" rules={[{ required: true }]}>
						<StyledCustomTextArea autoSize={{ minRows: 6 }} />
					</Item>
				</StyledCol>
				<StyledCol md={24}>
					<Item>
						<StyledCustomBtn htmlType="submit" loading={isLoading}>
							Submit
						</StyledCustomBtn>
					</Item>
				</StyledCol>
			</StyledRow>
		</Form>
	);
};

export default Ticket;
