import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import productsReducer from "./products/products.reducer";
const reducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
});
const store = configureStore({
	reducer,
});
export default store;
