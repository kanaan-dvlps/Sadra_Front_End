import axios from "@/services/axios";
import { useQuery } from "react-query";
import { GET_PRODUCT_DETAILS_KEY } from "@/services/constants";
export const useProductDetails = (category, id) => {
	return useQuery([GET_PRODUCT_DETAILS_KEY, id], () =>
		axios.get(`/products/en-us/${category}/${id}`).then(res => res.data.message)
	);
};
