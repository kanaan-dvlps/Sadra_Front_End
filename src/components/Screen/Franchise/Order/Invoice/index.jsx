import React from 'react'
import { Card, Descriptions } from 'antd';
import useMediaQuery from "@/components/hooks/useMediaQuery";
import OrdersTable from '../OrdersTable/OrdersTable';
import OrderCard from '../OrderCard/OrderCard';
import { StyledCustomCard } from '@/components/Common';

const Invoice = ({ invoice }) => {
    const isDesktop = useMediaQuery("(min-width: 960px)");

    return (
        <>
            <Card title="Invoice">
                <Descriptions title="Company Info">
                    <Descriptions.Item label="Company Name">{invoice?.companyName}</Descriptions.Item>
                    <Descriptions.Item label="Company Phone">{invoice?.companyPhone}</Descriptions.Item>
                    <Descriptions.Item label="Company PostalCode">{invoice?.companyPostalCode}</Descriptions.Item>
                    <Descriptions.Item label="Invoice Address">{invoice?.invoiceAddress}</Descriptions.Item>
                    <Descriptions.Item label="Order Date">{invoice?.orderDate}</Descriptions.Item>
                </Descriptions>
                <StyledCustomCard title="Order Detail" style={{ padding: "8px" }}>
                    {isDesktop ? <OrdersTable orders={invoice?.orderDetail} /> : <OrderCard orders={invoice?.orderDetail} />}
                </StyledCustomCard>

            </Card>

        </>
    )
}

export default Invoice