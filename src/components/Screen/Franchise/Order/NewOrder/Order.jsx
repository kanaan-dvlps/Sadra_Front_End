import React, { useEffect, useState } from 'react'
import { Form, Select, InputNumber } from "antd";
import {
    StyledButton,
    StyledCustomSelect,
} from "@/components/Common";
import { useProducts } from '@/api/api.products';
const { Option } = Select;
const mainCategory = [
    {
        value: "rod-screw-system",
        label: "Rod-Screw-Systems"
    },
    {
        value: "cage-system",
        label: "Cages"
    },
    {
        value: "bone-substitute-bone-cement-system",
        label: "Bone Substitute & Bone Cement"
    },
    // {
    //     value: "Vertebral Body Replacements",
    //     label: "Vertebral Body Replacements"
    // }, 
    {
        value: "cranio-maxillofacial",
        label: "MaxillioFacial"
    }
]
const OrderPage = () => {
    const [subCategory, setsubCategory] = useState([]);
    const [products, setProducts] = useState([]);
    const [getProductInfo, setGetProductInfo] = useState(false);
    const [category, setsCategory] = useState("");
    const { data, isLoading, isFetching } = useProducts(category, getProductInfo);
    const [form] = Form.useForm();

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
        const category = data.find((item) => item.productCategory == value);
        const product = category?.products?.map((item) => ({ productName: item.productName, productId: item._id }));
        setProducts(product);

    }
    const onFinish = (values) => console.log(values, '========values');
    return (
        <Form initialValues={{ amount: 1 }} form={form} name="complex-form" onFinish={onFinish} layout="inline"
        >
            <Form.Item name={"mainCategory"}>

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
            <Form.Item name={"productCategory"}>
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

            <Form.Item name={"productVariant"}>

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
            <Form.Item name={"productId"}>
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
    )
}

export default OrderPage