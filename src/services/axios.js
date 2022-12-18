import { getCookie } from "@/utils/auth.utils";
import Axios from "axios";
import { API } from "./constants";
const axios = Axios.create({
	baseURL: API.baseUrl,
});
axios.interceptors.request.use(
	async config => {
		const token = getCookie("token");

		config.headers.Authorization = token;
		if (token) config.headers.Authorization = token;
		return config;
	},
	error => Promise.reject(error)
);

export default axios;
