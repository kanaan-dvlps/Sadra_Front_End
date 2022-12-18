import axios from "@/services/axios";
import { API } from "@/services/constants";
import { setToken } from "@/utils/auth.utils";
import { message } from "antd";
import { useMutation } from "react-query";

export const useAuth = () =>
	useMutation(
		async data => {
			return await axios.post(API.login, data);
		},
		{
			onSuccess: token => {
				message.success("Authentication Successfully");
				setToken(token);
			},
		},
		{
			onError: () => message.error("Request failed"),
		}
	);
