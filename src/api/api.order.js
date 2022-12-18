import axios from "@/services/axios";
import { API, GET_ORDERS_KEY } from "@/services/constants";
import { message } from "antd";
import { useMutation, useQuery } from "react-query";

export const useSendOrder = () =>
	useMutation(
		async data => {
			return await axios.post(API.order, data);
		},
		{
			onSuccess: () => message.success("The request was made successfully"),
		},
		{
			onError: () => message.error("Request failed"),
		}
	);

export const useGetOrders = () =>
	useQuery(GET_ORDERS_KEY, () => axios.get(API.order).then(res => res.data.message));
