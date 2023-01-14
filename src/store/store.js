import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import newsEventsReducer from "./news-events/newsEvents.reducer";
import productsReducer from "./products/products.reducer";
const reducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	newsEvent: newsEventsReducer
});
const store = configureStore({
	reducer,
});
export default store;
