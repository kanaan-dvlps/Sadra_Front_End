import axios from "@/services/axios";
import { API, GET_PRODUCTS_KEY } from "@/services/constants";
import { useQuery } from "react-query";

export const useSingleProduct = (category, productId, isSinglePageLoaded) => {
    const { data, isSuccess } = useQuery([GET_PRODUCTS_KEY, category], () =>
        axios.get(`/products/en-us/${category}/${productId}`).then(res => res.data)
        , { enabled: isSinglePageLoaded });
    return {
        data: data?.message,
        isSuccess,
    };
};
