import axios from "@/services/axios";
import { useQuery } from "react-query";
import { GET_MAXILLIOFACIAL_PRODUCTS_KEY } from "@/services/constants";
export const useMaxillioFacialProducts = () => {
    return useQuery([GET_MAXILLIOFACIAL_PRODUCTS_KEY], () =>
        axios.get(`/products/en-us/cranio-maxillofacial`).then(res => res.data.message)
    );
};

export const useMaxillioFacialProductDetails = (id, isSinglePageLoaded) => {
    return useQuery([GET_MAXILLIOFACIAL_PRODUCTS_KEY], () =>
        axios.get(`/products/en-us/cranio-maxillofacial/${id}`).then(res => res.data.message), { enabled: isSinglePageLoaded }
    );
};