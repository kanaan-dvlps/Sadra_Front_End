import { contactUs } from "@/utils/layout";
import { StyledCol, StyledImage, StyledRow, StyledText } from "@/components/Common";
import { StyledContainer } from "./style";
const ContactUsStack = () => {
	const renderContactItems = contactUs.map(({ id, info, image }) => (
		<StyledCol lg={8} xs={24} key={id}>
			<StyledContainer border={id === 2}>
				<StyledImage height="auto" src={image} />
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
