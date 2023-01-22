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
		if (router.asPath === "/" && LastProductTitleRef) {
			setLastProductTopOffset(LastProductTitleRef.current.offsetTop);
		}
	}, [LastProductTitleRef, windowSize]);

	return (
		<StyledDiv>
			<Head>
				<title>sadra salamat</title>
				<meta charSet='utf-8' />
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<meta
					content='width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1, user-scalable=no '
					name='viewport'
				/>
				{/* facebook meta tag */}
				<meta property="og:title" content="sadra salamat" key="title" />
				{/* Google meta tag */}
				<meta itemProp="name" content="My page title" />
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
