import { StyledCol, StyledH1, StyledImage, StyledRow, StyledText } from "@/components/Common";
import { data } from "@/utils/aboutUs";

const AboutUs = () => {
	const items = data.map(({ image, title, text }, index) => (
		<StyledRow key={index} flexDirection={index % 2 === 0 ? "row" : "row-reverse"} my="50px">
			<StyledCol md={{ span: 10, offset: 1 }} xs={24}>
				<StyledImage width="100%" src={image} />
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
