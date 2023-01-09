import { Carousel } from "antd";
import styled from "styled-components";
import { StyledCol, StyledDiv, StyledImage, StyledRow, StyledTitle } from "..";
import ScrollComponent from "../ScrollComponent/ScrollComponent";
import { StyledContainer } from "./style";

const Banner = ({ lastProductTopOffset }) => {
	const GoToProducts = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: lastProductTopOffset, left: 0, behavior: 'smooth' });
		}
	};
	return (
		<>
			<Carousel autoplay>
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
						<StyledCol md={12} xs={24} >
							<StyledImage width="100%" maxHeight='450px' src="/images/home/heroHeader.svg" />
						</StyledCol>

					</StyledRow>
				</StyledContainer>
				{/*TODO: remove later ===================*/}
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
							<StyledImage width="100%" maxHeight='450px' src="/images/home/heroHeader.svg" />
						</StyledCol>

					</StyledRow>
				</StyledContainer>
				{/*TODO: remove later ===================*/}
			</Carousel>
			<Vector onClick={GoToProducts} >
				<ScrollComponent />
			</Vector>
		</>

	);
};

const Vector = styled.div`
	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export default Banner;
