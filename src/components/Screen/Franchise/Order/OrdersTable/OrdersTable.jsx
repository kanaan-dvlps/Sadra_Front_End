import React from 'react'
import { columns } from '../constants'
import { StyledCustomTable } from '@/components/Common';

const OrdersTable = ({ orders }) => {
    return (
        <StyledCustomTable size="small" style={{ margin: '24px 0', background: 'var(--light-blue)' }} dataSource={orders} columns={columns} pagination={false} />
    )

}

export default OrdersTable

