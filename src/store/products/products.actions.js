import axios from "@/services/axios";
import { API } from "@/services/constants";
import {
	GET_BONE_PRODUCTS,
	GET_CAGE_PRODUCTS,
	GET_MAXILLIOFACIAL_PRODUCTS,
	GET_RODSCREW_PRODUCTS,
} from "./products.constants";
export const getBoneProducts = () => {
	return async dispatch => {
		try {
			const response = await axios.get(API.bone).then(res => res.data);
			dispatch({ type: GET_BONE_PRODUCTS, payload: response });
		} catch (e) {
			console.log(e);
		}
	};
};
export const getCageProducts = () => {
	return async dispatch => {
		try {
			const response = await axios.get(API.cage).then(res => res.data);
			dispatch({ type: GET_CAGE_PRODUCTS, payload: response });
		} catch (e) {
			console.log(e);
		}
	};
};
export const getMaxillioFacialProducts = () => {
	return async dispatch => {
		try {
			const response = await axios.get(API.maxillioFacial).then(res => res.data);
			dispatch({ type: GET_MAXILLIOFACIAL_PRODUCTS, payload: response });
		} catch (e) {
			console.log(e);
		}
	};
};
export const getRodScrewProducts = () => {
	return async dispatch => {
		try {
			const response = await axios.get(API.rodScrew).then(res => res.data);
			dispatch({ type: GET_RODSCREW_PRODUCTS, payload: response });
		} catch (e) {
			console.log(e);
		}
	};
};
