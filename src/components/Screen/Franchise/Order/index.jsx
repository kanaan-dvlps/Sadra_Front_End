import { StyledTabs } from "@/components/Common";
import {
	getBoneProducts,
	getCageProducts,
	getMaxillioFacialProducts,
	getRodScrewProducts,
} from "@/store/products/products.actions";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Invoice from "./Invoice";
import NewOrder from "./NewOrder";
import OrderPage from "./NewOrder/Order";
import OrdersList from "./OrdersList";
const { TabPane } = Tabs;

const Order = () => {
	const [activePage, setActivePage] = useState(1);
	const [invoice, setInvoice] = useState({});

	const setInvoiceDetail = (value) => setInvoice(value);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getBoneProducts());
	// 	dispatch(getCageProducts());
	// 	dispatch(getRodScrewProducts());
	// 	dispatch(getMaxillioFacialProducts());
	// }, []);

	// <StyledTabs defaultActiveKey="newOrder">
	// 	<TabPane tab="New Order" key="newOrder">
	// 		<OrderPage />
	// 		{/* <NewOrder /> */}
	// 	</TabPane>
	// 	{/* <TabPane tab="Orders List" key="ordersList">
	// 		<OrdersList />
	// 	</TabPane> */}
	// </StyledTabs>

	return (
		<>
			{activePage === 1 && <OrderPage setActivePage={setActivePage} setInvoiceDetail={setInvoiceDetail} />}
			{activePage === 2 && <Invoice invoice={invoice} />}

		</>
	)

};

export default Order;
