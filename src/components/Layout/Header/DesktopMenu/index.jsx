import { Navbar } from "@/utils/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { DesktopNav, NavItem, NavLink } from "./desktop-menu.styles";
import { FormattedMessage } from 'react-intl'

const DesktopMenu = () => {
	const router = useRouter();
	return (
		<DesktopNav>
			{
				Navbar.map(({ path, title }) => (
					<NavItem key={path} active={router.asPath.includes(path)}>
						<Link href={path} passHref>
							<NavLink><FormattedMessage id={title} /></NavLink>
						</Link>
					</NavItem>
				))
			}
		</DesktopNav>
	);
};

export default DesktopMenu;
