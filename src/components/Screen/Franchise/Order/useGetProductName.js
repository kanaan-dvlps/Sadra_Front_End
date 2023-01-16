import { useMemo, useState } from "react"
import axios from "@/services/axios";
export const useGetProductName = (category, productId) => {
    const [productName, setProductName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useMemo(() => {
        setIsLoading(true);
        axios.get(`/products/en-us/${category}/${productId}`).then(res => {
            setProductName(res?.data?.message?.productName);
            setIsLoading(false);

        })
    }, [category, productId]
    )
    return { productName, isLoading };
}