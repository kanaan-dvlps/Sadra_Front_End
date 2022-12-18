import axios from "@/services/axios";
import { API, GET_PRODUCTS_KEY } from "@/services/constants";
import { useQuery } from "react-query";
export const useProducts = category => {
	const { data, isLoading } = useQuery([GET_PRODUCTS_KEY, category], () =>
		axios.get(`/products/en-us/${category}`).then(res => res.data)
	);
	return {
		data: data?.message,
		isLoading,
	};
};
