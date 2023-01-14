import React from 'react'
import { Descriptions } from "antd";
import { StyledCustomCard } from '@/components/Common';

const OrderCard = ({ orders }) => {
    return (
        orders?.map((order) => {
            return (
                <StyledCustomCard type="inner" style={{ margin: '24px 0' }} title={order?.productId} key={order?.productId}>
                    <Descriptions >
                        <Descriptions.Item label="Main Category">{order?.mainCategory}</Descriptions.Item>
                        <Descriptions.Item label="Product Category">{order?.productCategory}</Descriptions.Item>
                        <Descriptions.Item label="Porduct Variant">{order?.productVariant}</Descriptions.Item>
                        <Descriptions.Item label="amount">{order?.amount}</Descriptions.Item>
                        <Descriptions.Item label="Product Id">{order?.productId}</Descriptions.Item>
                    </Descriptions>
                </StyledCustomCard>

            )
        })
    )

}

export default OrderCard