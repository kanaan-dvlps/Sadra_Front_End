import React from 'react'
import { useSingleProduct } from "@/api/api.singleProduct";

const ProductName = ({ productVariant, product }) => {
    const { data, isSuccess } = useSingleProduct(productVariant, product, true);
    console.log(data, '=========data');
    console.log(productVariant, product, '===== productVariant, product')
    return (
        isSuccess && <>{data?.productName}</>)
}

export default ProductName