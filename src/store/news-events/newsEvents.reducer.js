import { SET_SINGLE_NEWS, SET_SINGLE_EVENT } from "./newsEvents.constants";

const initialState = {
    single_news: null,
    single_event: null,

};
const newsEventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SINGLE_NEWS:
            return { ...state, single_news: action.payload };
        case SET_SINGLE_EVENT:
            return { ...state, single_event: action.payload };
        default:
            return state;
    }
};
export default newsEventsReducer;
