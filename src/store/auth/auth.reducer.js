import { getCookie } from "@/utils/auth.utils";
import { SET_ISAUTHENTICATION } from "./auth.constants";

const initialState = {
	isAuthentication: getCookie("token"),
};
const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_ISAUTHENTICATION:
			return { ...state, isAuthentication: true };

		default:
			return state;
	}
};
export default authReducer;
