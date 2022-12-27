import { useSelector } from "react-redux";
import { useSendOrder } from "@/api/api.order";
import {
	StyledButton,
	StyledCol,
	StyledCustomBtn,
	StyledCustomInputNumber,
	StyledCustomSelect,
	StyledRow,
} from "@/components/Common";
import { normalizeKey, variantsOptions } from "@/utils/common";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select, Space } from "antd";
const { Item, List } = Form;
const { Option } = Select;

const NewOrder = () => {
	const products = useSelector(state => state.products);
	const { isLoading, mutateAsync } = useSendOrder();
	const [form] = Form.useForm();

	const onFinish = values => mutateAsync(values);
	//handleChangeMainCategory
	const handleChangeMainCategory = index => {
		const orders = form.getFieldValue("orders");
		if (orders) {
			orders[index].prductVariant = null;
			orders[index].productCategory = null;
			orders[index].productId = null;
		}
		form.setFieldValue("orders", orders);
	};
	//handleChangeProductVariant
	const handleChangeProductVariant = index => {
		const orders = form.getFieldValue("orders");
		if (orders) {
			orders[index].productCategory = null;
			orders[index].productId = null;
		}
		form.setFieldValue("orders", orders);
	};
	//handleChangeProductCategory
	const handleChangeProductCategory = index => {
		const orders = form.getFieldValue("orders");
		if (orders) {
			orders[index].productId = null;
		}
		form.setFieldValue("orders", orders);
	};
	//getprductVariantOptions
	const getprductVariantOptions = main => variantsOptions?.[main];
	//getProducCategoryOptions
	const getProducCategoryOptions = productVariant =>
		products?.[normalizeKey(productVariant)]?.map(({ name }) => ({ label: name, value: name }));
	//	getProducsOptions
	const getProducsOptions = productCategory =>
		products?.[normalizeKey(productCategory)]?.products?.map(({ name }) => ({
			label: name,
			value: name,
		}));
	return (
		<Form
			layout="vertical"
			form={form}
			name="dynamic_form_nest_item"
			onFinish={onFinish}
			autoComplete="off"
		>
			<List name="orders" initialValue={[products?.singleProduct]}>
				{(fields, { add, remove }) => (
					<>
						{fields.map((field, index) => (
							<StyledRow key={index} gutter={[16, 16]}>
								<StyledCol md={4} xs={24}>
									<Item
										{...field}
										label="mainCategory"
										name={[field.name, "mainCategory"]}
										rules={[
											{
												required: true,
												message: "mainCategory is required",
											},
										]}
									>
										<StyledCustomSelect onChange={value => handleChangeMainCategory(index, value)}>
											<Option key="spine" value="spine">
												spine
											</Option>
											<Option key="caranio" value="caranio">
												caranio
											</Option>
										</StyledCustomSelect>
									</Item>
								</StyledCol>
								<StyledCol md={4} xs={24}>
									<Item
										{...field}
										label="prductVariant"
										name={[field.name, "prductVariant"]}
										rules={[
											{
												required: true,
												message: "prductVariant is required",
											},
										]}
									>
										<StyledCustomSelect
											onChange={() => handleChangeProductVariant(index)}
											options={getprductVariantOptions(
												form.getFieldValue("orders")?.[index]?.mainCategory
											)}
										/>
									</Item>
								</StyledCol>
								<StyledCol md={4} xs={24}>
									<Item
										{...field}
										label="productCategory"
										name={[field.name, "productCategory"]}
										rules={[{ required: true, message: "productCategory is required" }]}
									>
										<StyledCustomSelect
											options={getProducCategoryOptions(
												form.getFieldValue("orders")?.[index]?.prductVariant
											)}
											onChange={() => handleChangeProductCategory(index)}
										/>
									</Item>
								</StyledCol>
								<StyledCol md={4} xs={24}>
									<Item
										{...field}
										label="product"
										name={[field.name, "productId"]}
										rules={[
											{
												required: true,

												message: "product is required",
											},
										]}
									>
										<StyledCustomSelect
											options={getProducsOptions(
												form.getFieldValue("orders")?.[index]?.productCategory
											)}
										/>
									</Item>
								</StyledCol>
								<StyledCol md={4} xs={12}>
									<Item
										{...field}
										label="amount"
										name={[field.name, "amount"]}
										rules={[{ required: true, message: "amount is required" }]}
									>
										<StyledCustomInputNumber min={1} />
									</Item>
								</StyledCol>
								<StyledCol md={2} xs={12}>
									<MinusCircleOutlined onClick={() => remove(field.name)} />
								</StyledCol>
							</StyledRow>
						))}

						<Item>
							<StyledButton
								height="40px"
								type="dashed"
								onClick={() => add()}
								block
								icon={<PlusOutlined />}
							>
								Add Order
							</StyledButton>
						</Item>
					</>
				)}
			</List>
			<Form.Item>
				<StyledCustomBtn htmlType="submit" loading={isLoading}>
					Submit
				</StyledCustomBtn>
			</Form.Item>
		</Form>
	);
};

export default NewOrder;
