import axios from "@/services/axios";
import { API, GET_NEWS_KEY } from "@/services/constants";
import { useQuery } from "react-query";

export const useGetNews = () =>
	useQuery(GET_NEWS_KEY, () => axios.get(API.news).then(res => res.data.message));
