import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.reducer";
import newsEventsReducer from "./news-events/newsEvents.reducer";
import productsReducer from "./products/products.reducer";
import settingsReducer from "./settings/settings.reducers";
const reducer = combineReducers({
	products: productsReducer,
	auth: authReducer,
	newsEvent: newsEventsReducer,
	setting: settingsReducer
});
const store = configureStore({
	reducer,
});
export default store;
