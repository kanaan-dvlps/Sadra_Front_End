import { StyledCustomSkeletonInput } from '@/components/Common';
import React from 'react'
import { columns } from '../constants'
import { useGetProductName } from '../useGetProductName';
import { CustomTable, CustomTd, CustomTh, CustomTr } from './table.styles';

const OrdersTable = ({ orders }) => {
    return (
        <CustomTable>
            <tr>
                {columns.map(column => <CustomTh key={column}>{column}</CustomTh>)}
            </tr>
            <tbody>
                {orders.map(order => {
                    return (
                        <OrderTableRow order={order} key={order.productId} />
                    )
                })}
            </tbody>
        </CustomTable>
    )

}

const OrderTableRow = ({ order }) => {
    const { productName, isLoading } = useGetProductName(order?.productCategory, order?.productId)
    return (
        <>
            {
                isLoading ?
                    (
                        <CustomTr>
                            <CustomTd><StyledCustomSkeletonInput active /></CustomTd>
                            <CustomTd><StyledCustomSkeletonInput active /></CustomTd>
                            <CustomTd><StyledCustomSkeletonInput active /></CustomTd>
                            <CustomTd><StyledCustomSkeletonInput active /></CustomTd>
                            <CustomTd><StyledCustomSkeletonInput active /></CustomTd>
                        </CustomTr>
                    ) : (
                        <CustomTr>
                            <CustomTd>{order.mainCategory}</CustomTd>
                            <CustomTd>{order.productCategory}</CustomTd>
                            <CustomTd>{order.productVariant}</CustomTd>
                            <CustomTd>{productName ? productName : '-'}</CustomTd>
                            {/* <CustomTd>{productName ? productName : '-'}</CustomTd> */}
                            <CustomTd>{order.amount}</CustomTd>
                        </CustomTr>
                    )}
        </>


    )

}
export default OrdersTable

