import React from 'react'
import { Table } from "antd";
import { columns } from '../constants'
import { StyledCustomTable } from '@/components/Common';

const OrdersTable = ({ orders }) => {
    return (
        <StyledCustomTable style={{ margin: '24px 0', background: 'var(--light-blue)' }} dataSource={orders} columns={columns} pagination={false} />
    )
}

export default OrdersTable