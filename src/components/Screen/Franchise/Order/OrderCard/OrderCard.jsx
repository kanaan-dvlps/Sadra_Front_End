import React from 'react'
import { Descriptions, Skeleton } from "antd";
import { StyledCustomCard } from '@/components/Common';
import { useGetProductName } from '../useGetProductName';

const OrderCard = ({ order }) => {
    const { productName, isLoading } = useGetProductName(order?.productCategory, order?.productId)
    return (
        <StyledCustomCard type="inner" style={{ margin: '24px 0' }} title={productName ? productName : '-'} key={order?.productId}>
            {isLoading ? (
                <Skeleton />
            ) : (<Descriptions >
                <Descriptions.Item label="Main Category">{order?.mainCategory}</Descriptions.Item>
                <Descriptions.Item label="Product Category">{order?.productCategory}</Descriptions.Item>
                <Descriptions.Item label="Porduct Variant">{order?.productVariant}</Descriptions.Item>
                <Descriptions.Item label="amount">{order?.amount}</Descriptions.Item>
                <Descriptions.Item label="Product Name">{productName ? productName : '-'}</Descriptions.Item>
            </Descriptions >)}
        </StyledCustomCard >
    )

}

export default OrderCard