import { useSelector } from "react-redux";
import Login from "./Login";
import Order from "./Order";

const Franchise = () => {
	const { isAuthentication } = useSelector(state => state.auth);
	if (!isAuthentication) return <Login />;

	return <Order />;
};

export default Franchise;
