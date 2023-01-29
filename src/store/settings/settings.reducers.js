import { CHANGE_LANGUAGE } from "./settings.constants";

const initialState = {
    language: 'fa'
};
const settingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return { ...state, language: action.payload.language };
        default:
            return state;
    }
};
export default settingsReducer;