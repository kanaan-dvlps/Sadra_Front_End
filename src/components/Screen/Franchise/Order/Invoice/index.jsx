import React from 'react'
import { Card, Descriptions } from 'antd';
import OrdersTable from '../OrdersTable/OrdersTable';

const Invoice = ({ invoice }) => {
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
                <Card title="Order Detail">
                    <OrdersTable orders={invoice?.orderDetail} />

                </Card>
            </Card>

        </>
    )
}

export default Invoice