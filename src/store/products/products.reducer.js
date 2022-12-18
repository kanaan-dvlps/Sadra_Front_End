import {
	GET_BONE_PRODUCTS,
	GET_CAGE_PRODUCTS,
	GET_MAXILLIOFACIAL_PRODUCTS,
	GET_RODSCREW_PRODUCTS,
	SET_SINGLE_PRODUCT,
} from "./products.constants";
const initialState = {
	bone_substitude_and_bone_cement: null,
	caranio_maxillio_facial: null,
	cage_system: null,
	rod_screw_system: null,
	singleProduct: null,
};

const productsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BONE_PRODUCTS:
			return { ...state, bone_substitude_and_bone_cement: action.payload };
		case GET_CAGE_PRODUCTS:
			return {
				...state,
				cage_system: action.payload,
			};
		case GET_MAXILLIOFACIAL_PRODUCTS:
			return { ...state, bone_substitude_and_bone_cement: action.payload };
		case GET_RODSCREW_PRODUCTS:
			return {
				...state,
				rod_screw_system: action.payload,
			};
		case SET_SINGLE_PRODUCT:
			return {
				...state,
				singleProduct: action.payload,
			};
		default:
			return state;
	}
};
export default productsReducer;
