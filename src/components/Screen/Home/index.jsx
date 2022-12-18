import { StyledCustomDivider, StyledDiv, StyledTitle } from "@/components/Common";
import LastProduct from "./LastProduct";
import News from "./News";

const Home = () => {
	return (
		<>
			<StyledDiv>
				<StyledCustomDivider>
					<StyledTitle textAlign="center" fontSize={{ md: "45px", xs: "20px" }} fonWeight="400">
						Last product
					</StyledTitle>
				</StyledCustomDivider>
			</StyledDiv>
			<LastProduct />
			<StyledDiv mt="140px">
				<StyledCustomDivider right>
					<StyledTitle textAlign="center" fontSize={{ md: "45px", xs: "20px" }} fonWeight="400">
						News
					</StyledTitle>
				</StyledCustomDivider>
				<News />
			</StyledDiv>
		</>
	);
};

export default Home;
