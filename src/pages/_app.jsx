import "@/assets/css/index.css";
import "@/assets/css/variables.css";
import "antd/dist/antd.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import store from "@/store/store";
const MyApp = ({ Component, pageProps }) => {
	const queryClient = new QueryClient();
	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<Component {...pageProps} />
			</QueryClientProvider>
		</Provider>
	);
};

export default MyApp;
