import { StyledCol, StyledH1, StyledRow, StyledText } from "@/components/Common";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";
import { data } from "@/utils/aboutUs";

const AboutUs = () => {
	const items = data.map(({ image, title, text }, index) => (
		<StyledRow key={index} flexDirection={index % 2 === 0 ? "row" : "row-reverse"} my="50px">
			<StyledCol md={{ span: 10, offset: 1 }} xs={24}>
				<ImageWrapper height='400px'>
					<StyledImage alt="about-us" fill src={image} />

				</ImageWrapper>
			</StyledCol>
			<StyledCol md={{ span: 10, offset: 2 }} xs={24}>
				<StyledH1 fontSize="30px" fontWeight="600" color=" #002434">
					{title}
				</StyledH1>
				<StyledText fontSize="20px" color="#45494A" font-weight="500">
					{text}
				</StyledText>
			</StyledCol>
		</StyledRow>
	));
	return items;
};

export default AboutUs;
