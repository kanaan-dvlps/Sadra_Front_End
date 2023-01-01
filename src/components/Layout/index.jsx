import { Breadcrumb } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { StyledCustomDivider, StyledDiv, StyledStack, StyledTitle } from "../Common";
import Banner from "../Common/Banner";
import useHandleWindowResize from "../hooks/useHandleWindowResize";
import useMediaQuery from "../hooks/useMediaQuery";
import Footer from "./Footer";
import Header from "./Header";
const { Item } = Breadcrumb;
const Layout = ({ children, hasBanner }) => {
	const router = useRouter();
	const paths = router.asPath.split("/").slice(1);
	const BreadcrumbItems = ["Home", ...paths].map(path => <Item key={path}>{path}</Item>);
	const LastProductTitleRef = React.createRef();
	const windowSize = useHandleWindowResize();
	const [lastProductTopOffset, setLastProductTopOffset] = useState();

	useEffect(() => {
		if (LastProductTitleRef) {
			setLastProductTopOffset(LastProductTitleRef.current.offsetTop);
		}
	}, [LastProductTitleRef, windowSize]);

	return (
		<StyledDiv>
			<Head>
				<title>sadra salamat</title>
				<meta property="og:title" content="My page title" key="title" />
				<link rel="icon" href="/images/logo.png" />
			</Head>
			<Header />
			{hasBanner && <Banner lastProductTopOffset={lastProductTopOffset} />}
			{router.asPath === "/" && (
				<StyledDiv>
					<StyledCustomDivider>
						<StyledTitle ref={LastProductTitleRef} textAlign="center" fontSize={{ md: "45px", xs: "20px" }} fonWeight="400">
							Last product
						</StyledTitle>
					</StyledCustomDivider>
				</StyledDiv>
			)}

			<StyledStack>
				<StyledDiv pb="40px">
					{router.asPath !== "/" && <Breadcrumb>{BreadcrumbItems}</Breadcrumb>}
				</StyledDiv>
				{children}
			</StyledStack>
			<Footer />
		</StyledDiv >
	);
};

export default Layout;
