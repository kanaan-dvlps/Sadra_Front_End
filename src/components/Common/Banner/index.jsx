import { StyledCol, StyledDiv, StyledImage, StyledRow, StyledTitle } from "..";
import { StyledContainer } from "./style";

const Banner = () => {
	return (
		<StyledContainer>
			<StyledRow>
				<StyledCol md={12} xs={24}>
					<StyledDiv
						height="100%"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						textAlign="center"
					>
						<StyledTitle fontSize={{ md: "50px", xs: "30px" }} fontWeight="700" color="#002434">
							SPINE SOLUTIONS
						</StyledTitle>
						<StyledTitle fontSize={{ md: "25px", xs: "15px" }} textAlign="center" color="#000000">
							Dynamishe Schraube
						</StyledTitle>
					</StyledDiv>
				</StyledCol>
				<StyledCol md={12} xs={24}>
					<StyledImage width="100%" src="/images/home/heroHeader.svg" />
				</StyledCol>
			</StyledRow>
		</StyledContainer>
	);
};

export default Banner;
