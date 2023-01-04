import { SET_SINGLE_NEWS } from "./newsEvents.constants";

const initialState = {
    single_news: null,
};
const newsEventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_NEWS:
            return { ...state, single_news: action.payload };
        default:
            return state;
    }
};
export default newsEventsReducer;
