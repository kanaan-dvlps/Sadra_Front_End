import React, { useEffect, useState } from 'react'
import { Form, Select, InputNumber } from "antd";
import {
    StyledButton,
    StyledCustomSelect,
} from "@/components/Common";
const { Option } = Select;
import { mainCategory } from '../constants'
import { useProducts } from '@/api/api.products';
import { useSendOrder } from "@/api/api.order";
import OrdersTable from '../OrdersTable/OrdersTable';
import useMediaQuery from "@/components/hooks/useMediaQuery";
import OrderCard from '../OrderCard/OrderCard';

const OrderPage = ({ setActivePage, setInvoiceDetail }) => {
    const [productVariant, setProductVariant] = useState([]);
    const [products, setProducts] = useState([]);
    const [getProductInfo, setGetProductInfo] = useState(false);
    const [productCategory, setProductCategory] = useState("");
    const { data, isLoading, isFetching } = useProducts(productCategory, getProductInfo);
    const [form] = Form.useForm();
    const [orders, setOrders] = useState([]);
    const { isLoading: isSendingOrderLoading, mutateAsync, isSuccess } = useSendOrder(setInvoiceDetail);
    const isDesktop = useMediaQuery("(min-width: 960px)");
    useEffect(() => {
        if (!isFetching) {
            const productVariant = data?.map((item) => item.productCategory);
            setProductVariant(productVariant)
        }
    }, [isFetching])
    useEffect(() => {
        form.setFieldValue("subcategory", []);
        form.setFieldValue("products", []);
    }, [productCategory]);
    const handleProductCategoryChange = (value) => {
        setProductCategory(value);
        setGetProductInfo(true);
    }
    const handleProductVariantChange = (value) => {
        const category = data?.find((item) => item.productCategory == value);
        const product = category?.products?.map((item) => ({ productName: item.productName, productId: item._id }));
        setProducts(product);

    }
    const AddOrder = (values) => {
        setOrders(value => [...value, values]);
        form.resetFields();
    }
    const userId = localStorage.getItem("id");
    const onFinish = () => mutateAsync({ orderDetail: orders, id: userId });
    useEffect(() => { isSuccess && setActivePage(2) }, [isSuccess])
    return (
        <>
            <Form initialValues={{ amount: 1 }} form={form} name="order-form" onFinish={AddOrder} layout={isDesktop && "inline"}
            >
                <Form.Item
                    name={"mainCategory"}
                    rules={[
                        {
                            required: true,
                            message: "Main Category is required",
                        },
                    ]}>

                    <StyledCustomSelect
                        placeholder="Main Category"
                    >
                        <Option key="spine" value="spine">
                            spine
                        </Option>
                        <Option key="caranio" value="caranio">
                            caranio
                        </Option>

                    </StyledCustomSelect>
                </Form.Item>
                <Form.Item name={"productCategory"}
                    rules={[
                        {
                            required: true,
                            message: "Product Category is required",
                        },
                    ]}>
                    <StyledCustomSelect
                        onChange={handleProductCategoryChange}
                        placeholder="Product Category"
                    >
                        {mainCategory.map((item, index) => {
                            return (
                                <Option key={index} value={item.value}>{item.label}</Option>

                            )
                        })}
                    </StyledCustomSelect>
                </Form.Item>

                <Form.Item name={"productVariant"}
                    rules={[
                        {
                            required: true,
                            message: "Product Variant is required",
                        },
                    ]}
                >

                    <StyledCustomSelect
                        onChange={handleProductVariantChange}
                        placeholder="Prduct Variant"
                    >
                        {productVariant?.map((item, index) => {
                            return (
                                <Option key={index} value={item}>{item}</Option>
                            )
                        })}

                    </StyledCustomSelect>
                </Form.Item>
                <Form.Item name={"productId"}
                    rules={[
                        {
                            required: true,

                            message: "product is required",
                        },
                    ]}>
                    <StyledCustomSelect
                        placeholder="products"

                    >
                        {products?.map((item, index) => {
                            return (
                                <Option key={index} value={item.productId}>{item.productName}</Option>

                            )
                        })}
                    </StyledCustomSelect>
                </Form.Item>
                <Form.Item label="amount" name={"amount"}>
                    <InputNumber addonBefore="+" defaultValue={1} />
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <StyledButton type="primary" htmlType="submit">
                        Add Order
                    </StyledButton>
                </Form.Item>

            </Form>
            {(orders.length > 0 && !isDesktop) && orders.map((order) => {
                return (
                    <OrderCard key={order.productId} order={order} />)
            })}
            {(orders.length > 0 && isDesktop) && (
                <OrdersTable orders={orders} />
            )}
            <StyledButton onClick={onFinish} style={{ margin: '24px 0' }} type="primary" loading={isSendingOrderLoading} >
                Submit Order
            </StyledButton>
        </>
    )
}

export default OrderPage