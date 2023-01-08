import axios from "@/services/axios";
import { API, GET_EVENTS_KEY } from "@/services/constants";
import { useQuery } from "react-query";
export const useGetEvents = (isSinglePageLoaded = false) =>
	useQuery(GET_EVENTS_KEY, () => axios.get(API.events).then(res => res.data.message), { enabled: isSinglePageLoaded });
