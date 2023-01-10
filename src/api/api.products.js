import axios from "@/services/axios";
import { API, GET_PRODUCTS_KEY } from "@/services/constants";
import { useQuery } from "react-query";
export const useProducts = (category, getProductInfo = false) => {
	const { data, isLoading, isFetching } = useQuery([GET_PRODUCTS_KEY, category], () =>
		axios.get(`/products/en-us/${category}`).then(res => res.data), { enabled: getProductInfo }
	);

	return {
		data: data?.message,
		isLoading,
		isFetching
	};
};
