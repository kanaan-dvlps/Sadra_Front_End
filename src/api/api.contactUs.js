import axios from "@/services/axios";
import { API } from "@/services/constants";
import { message } from "antd";
import { useMutation } from "react-query";

export const useSendTicket = () =>
	useMutation(
		async data => {
			return await axios.post(API.contactUs, data);
		},
		{
			onSuccess: () => message.success("The request was made successfully"),
		},
		{
			onError: () => message.error("Request failed"),
		}
	);
