import React, { useEffect, useState } from 'react'
import { Form, Select, InputNumber, Table } from "antd";
import {
    StyledButton,
    StyledCustomSelect,
} from "@/components/Common";
const { Option } = Select;
import { mainCategory } from '../constants'
import { useProducts } from '@/api/api.products';
import { useSendOrder } from "@/api/api.order";
import OrdersItems from '../OrdersTable/OrdersTable';
import useMediaQuery from "@/components/hooks/useMediaQuery";
import OrderCard from '../OrderCard/OrderCard';

const OrderPage = ({ setActivePage, setInvoiceDetail }) => {
    const [subCategory, setsubCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [getProductInfo, setGetProductInfo] = useState(false);
    const [category, setsCategory] = useState("");
    const { data, isLoading, isFetching } = useProducts(category, getProductInfo);
    const [form] = Form.useForm();
    const [orders, setOrders] = useState([]);
    const { isLoading: isSendingOrderLoading, mutateAsync, isSuccess } = useSendOrder(setInvoiceDetail);
    const isDesktop = useMediaQuery("(min-width: 960px)");

    useEffect(() => {
        if (!isFetching) {
            const subcatgory = data?.map((item) => item.productCategory);
            setsubCategory(subcatgory)
        }
    }, [isFetching])
    useEffect(() => {
        form.setFieldValue("subcategory", []);
        form.setFieldValue("products", []);
    }, [category]);
    const handleMainCategoryChange = (value) => {
        setsCategory(value);
        setGetProductInfo(true);
    }
    const handleSubCategoryChange = (value) => {
        const category = data?.find((item) => item.productCategory == value);
        const product = category?.products?.map((item) => ({ productName: item.productName, productId: item._id }));
        setProducts(product);

    }
    const AddOrder = (values) => {
        setOrders(value => [...value, values]);
        form.resetFields();
    }
    const onFinish = () => mutateAsync({ orderDetail: orders });
    useEffect(() => { isSuccess && setActivePage(2) }, [isSuccess])
    return (
        <>
            <Form initialValues={{ amount: 1 }} form={form} name="complex-form" onFinish={AddOrder} layout={isDesktop && "inline"}
            >
                <Form.Item
                    name={"mainCategory"}
                    rules={[
                        {
                            required: true,
                            message: "mainCategory is required",
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
                            message: "productCategory is required",
                        },
                    ]}>
                    <StyledCustomSelect
                        onChange={handleMainCategoryChange}
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
                            message: "productVariant is required",
                        },
                    ]}
                >

                    <StyledCustomSelect
                        onChange={handleSubCategoryChange}
                        placeholder="Prduct Variant"
                    >
                        {subCategory?.map((item, index) => {
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
            {
                (isDesktop && orders.length > 0) ? <OrdersItems orders={orders} /> : <OrderCard orders={orders} />
            }
            <StyledButton onClick={onFinish} style={{ margin: '24px 0' }} type="primary" loading={isSendingOrderLoading} >
                Submit Order
            </StyledButton>
        </>
    )
}

export default OrderPage