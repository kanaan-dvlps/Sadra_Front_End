import { StyledDiv } from "@/components/Common";

import { StyledContainer, StyledLogo, StyledSearch } from "./style";
import { SearchOutlined } from "@ant-design/icons";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { Breadcrumb } from "antd";
import Link from "next/link";
const { Item } = Breadcrumb;
const Header = () => {
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const renderMenu = isDesktop ? <DesktopMenu /> : <MobileMenu />;

	return (
		<StyledContainer>
			<Link href="/" passHref>
				<StyledLogo src="/images/logo.png" />
			</Link>
			{renderMenu}
			{isDesktop && (
				<StyledDiv height="100%" display="flex" alignItems="center">
					<StyledSearch bordered={false} prefix={<SearchOutlined />} />
				</StyledDiv>
			)}
		</StyledContainer>
	);
};

export default Header;
