import axios from "@/services/axios";
import { API, GET_ORDERS_KEY } from "@/services/constants";
import { logout } from "@/utils/auth.utils";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";
import { getCookie } from "@/utils/auth.utils";

export const useSendOrder = (setInvoiceDetail) =>
	useMutation(
		async data => {
			return await axios.post(API.order, data);
		},
		{
			onSuccess: (data) => {
				message.success("Order Submitted Successfully");
				setInvoiceDetail(data.data.message)
			},
			onError: (error) => {
				if ((error.response.status === 401 || error.response.status === 403)) {
					const token = getCookie("token");
					token && logout();
					window.location.href = "/"
				} else {
					message.error("Request failed");
				}
			},
		},

	);

export const useGetOrders = () =>
	useQuery(GET_ORDERS_KEY, () => axios.get(API.order).then(res => res.data.message));
