import { contactUs } from "@/utils/layout";
import { StyledCol, StyledRow, StyledText } from "@/components/Common";
import { StyledContainer } from "./style";
import { StyledImage, ImageWrapper } from "@/components/Common/image.styles";

const ContactUsStack = () => {
	const renderContactItems = contactUs.map(({ id, info, image }) => (
		<StyledCol lg={8} xs={24} key={id}>
			<StyledContainer border={id === 2}>
				<ImageWrapper centerImage={true} height='60px' width='60px' mobileWidth='40px' mobileHeight='40px'>
					<StyledImage alt="contact-us" fill src={image} />
				</ImageWrapper>
				<StyledText textAlign="center" mt="30px">
					{info[0]}
					<br />
					{info[1]}
				</StyledText>
			</StyledContainer>
		</StyledCol>
	));
	return <StyledRow>{renderContactItems}</StyledRow>;
};

export default ContactUsStack;
