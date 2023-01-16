import axios from "@/services/axios";
import { API } from "@/services/constants";
import { setToken } from "@/utils/auth.utils";
import { message } from "antd";
import { useMutation } from "react-query";
import Router from "next/router"

export const useAuth = (setErrorMessage) =>
	useMutation(
		async data => {
			return await axios.post(API.login, data);
		},
		{
			onSuccess: data => {
				if (data?.data?.code !== 401) {
					message.success("Authentication Successfully");
					setToken(data.data);
					Router.reload();
				} else {
					setErrorMessage("Wrong Username or password.if you don't have an account please contact the 3sMedical administrator.")
				}

			},
		},
		{
			onError: () => setErrorMessage("Wrong Username or password.if you don't have an account please contact the 3sMedical administrator."),
		}
	);
