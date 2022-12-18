import { StyledButton, StyledMenu, StyledMenuItem } from "@/components/Common";
import { Navbar } from "@/utils/layout";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const MobileMenu = () => {
	const [visible, setVisible] = useState(false);

	const onClose = () => setVisible(false);
	const showDrawer = () => setVisible(true);

	const MenuItems = Navbar.map(({ path, title }) => (
		<StyledMenuItem p="0 60px !important" key={path}>
			<Link href={path}>
				<a>{title}</a>
			</Link>
		</StyledMenuItem>
	));
	return (
		<>
			<StyledButton bg="transparent" icon={<MenuOutlined />} onClick={showDrawer}></StyledButton>
			<Drawer title="Menu" placement="top" onClose={onClose} visible={visible}>
				<StyledMenu bg="transparent" height=" 100%">
					{MenuItems}
				</StyledMenu>
			</Drawer>
		</>
	);
};

export default MobileMenu;
