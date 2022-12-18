import { StyledMenu, StyledMenuItem } from "@/components/Common";
import { Navbar } from "@/utils/layout";
import Link from "next/link";
import { useRouter } from "next/router";

const DesktopMenu = () => {
	const router = useRouter();

	const MenuItems = Navbar.map(({ path, title }) => (
		<StyledMenuItem key={path} active={router.asPath === path}>
			<Link href={path}>
				<a>{title}</a>
			</Link>
		</StyledMenuItem>
	));
	return (
		<StyledMenu bg="transparent" mode="horizontal">
			{MenuItems}
		</StyledMenu>
	);
};

export default DesktopMenu;
