import { StyledDiv, StyledImage, StyledText } from "@/components/Common";
import ContactUsStack from "@/components/Common/ContactUsStack";
import ScrollComponent from "@/components/Common/ScrollComponent/ScrollComponent";
import { footerBreadcrumb } from "@/utils/layout";
import { Breadcrumb } from "antd";
import Link from "next/link";
import styled from "styled-components";
import {
	StyledBreadcrumb,
	StyledBreadcrumbItem,
	StyledContainer,
	StyledFooterStack,
	StyledStack,
} from "./style";
const { Item } = Breadcrumb;
const Footer = () => {
	const GoToTop = () => {
		if (typeof window !== "undefined") {
			window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
		}
	};
	const renderfooterBreadcrumb = footerBreadcrumb.map(({ title, path }) => (
		<Item key={path} href={path}>
			{title}
		</Item>
	));

	return (
		<StyledContainer>
			<Vector onClick={GoToTop}>
				<ScrollComponent scrollToTop={true} />
			</Vector>

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

const Vector = styled.div`
	position: absolute;
	right: 0;
	@media screen and (max-width: 480px) {
		display: none;
	}
`;

export default Footer;
