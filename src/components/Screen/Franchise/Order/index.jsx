import { StyledTabs } from "@/components/Common";
import {
	getBoneProducts,
	getCageProducts,
	getMaxillioFacialProducts,
	getRodScrewProducts,
} from "@/store/products/products.actions";
import { Tabs } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import NewOrder from "./NewOrder";
import OrderPage from "./NewOrder/Order";
import OrdersList from "./OrdersList";
const { TabPane } = Tabs;
const Order = () => {
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(getBoneProducts());
	// 	dispatch(getCageProducts());
	// 	dispatch(getRodScrewProducts());
	// 	dispatch(getMaxillioFacialProducts());
	// }, []);
	return (
		// <StyledTabs defaultActiveKey="newOrder">
		// 	<TabPane tab="New Order" key="newOrder">
		// 		<OrderPage />
		// 		{/* <NewOrder /> */}
		// 	</TabPane>
		// 	{/* <TabPane tab="Orders List" key="ordersList">
		// 		<OrdersList />
		// 	</TabPane> */}
		// </StyledTabs>
		<OrderPage />

	);
};

export default Order;
