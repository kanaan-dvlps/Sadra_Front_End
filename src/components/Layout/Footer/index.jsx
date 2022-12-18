import { StyledDiv, StyledImage, StyledText } from "@/components/Common";
import ContactUsStack from "@/components/Common/ContactUsStack";
import { footerBreadcrumb } from "@/utils/layout";
import { Breadcrumb } from "antd";
import Link from "next/link";
import {
	StyledBreadcrumb,
	StyledBreadcrumbItem,
	StyledContainer,
	StyledFooterStack,
	StyledStack,
} from "./style";
const { Item } = Breadcrumb;
const Footer = () => {
	const renderfooterBreadcrumb = footerBreadcrumb.map(({ title, path }) => (
		<Item key={path} href={path}>
			{title}
		</Item>
	));

	return (
		<StyledContainer>
			<StyledDiv p="60px">
				<StyledImage width="100%" height="auto" src="/images/footer.png" />
			</StyledDiv>
			<ContactUsStack />
			<StyledDiv py="50px">
				<StyledBreadcrumb>{renderfooterBreadcrumb}</StyledBreadcrumb>
			</StyledDiv>
			<StyledFooterStack />
		</StyledContainer>
	);
};

export default Footer;
