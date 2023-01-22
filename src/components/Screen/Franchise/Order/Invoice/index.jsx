import React from 'react'
import { Card, Descriptions } from 'antd';
import useMediaQuery from "@/components/hooks/useMediaQuery";
import OrdersTable from '../OrdersTable/OrdersTable';
import OrderCard from '../OrderCard/OrderCard';

const Invoice = ({ invoice }) => {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <>
            <Card title="Invoice">
                <Descriptions column={1} title="Company Info">
                    <Descriptions.Item label="Company Name">{invoice?.companyName}</Descriptions.Item>
                    <Descriptions.Item label="Company Phone">{invoice?.companyPhone}</Descriptions.Item>
                    <Descriptions.Item label="Company PostalCode">{invoice?.companyPostalCode}</Descriptions.Item>
                    <Descriptions.Item label="Invoice Address">{invoice?.invoiceAddress}</Descriptions.Item>
                    <Descriptions.Item label="Order Date">{invoice?.orderDate}</Descriptions.Item>
                </Descriptions>
                {(invoice?.orderDetail?.length > 0 && !isDesktop) && invoice?.orderDetail?.map((order) => {
                    return (
                        <OrderCard key={order.productId} order={order} />)
                })}
                {(invoice?.orderDetail?.length > 0 && isDesktop) && (
                    <OrdersTable orders={invoice?.orderDetail} />
                )}
            </Card>

        </>
    )
}

export default Invoice