import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ticketOptions } from "@/utils/productDetails";
import {
	StyledCol,
	StyledDiv,
	StyledRow,
	StyledText,
	StyledTitle,
} from "@/components/Common";
import Description from "./Description";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import DesktopCarousel from "./DesktopCarousel";
import MobileCarousel from "./MobileCarousel";
import { useSelector } from "react-redux";
import { useSingleProduct } from "@/api/api.singleProduct";
import { useDispatch } from "react-redux";
import { SET_SINGLE_PRODUCT } from "@/store/products/products.constants";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";

const ProductDetails = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { singleProduct } = useSelector(state => state.products);
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const { productVariant, product } = router.query;

	//to fetch data information on page reload
	const [isSinglePageLoaded, setIsSinglePageLoaded] = useState(false);
	const { data, isSuccess } = useSingleProduct(productVariant, product, isSinglePageLoaded);

	useEffect(() => {
		if (!singleProduct && productVariant && product) {
			setIsSinglePageLoaded(true);
		}
	}, [singleProduct, router.query]);

	useEffect(() => {
		if (isSuccess && data) {
			dispatch({
				type: SET_SINGLE_PRODUCT,
				payload: {
					...data
				},
			})
		}
	}, [isSuccess]);

	const renderOptions = ticketOptions.map(({ title, path, image }) => (
		<StyledCol span={12} key={path}>
			<StyledDiv height="100%" border="2px solid #6FCBDF" textAlign="center" py="15px" px="5px">
				<Link href={path}>
					<a>
						<ImageWrapper height='60px' mobileHeight='60px'>
							<StyledImage fill alt='contact' src={image} />
						</ImageWrapper>

						<StyledText fontSize="10px">{title}</StyledText>
					</a>
				</Link>
			</StyledDiv>
		</StyledCol>
	));

	return (
		<StyledRow>
			<StyledCol md={6} xs={24}>
				{isDesktop ? (
					<DesktopCarousel items={singleProduct?.productImages} />
				) : (
					<MobileCarousel items={singleProduct?.productImages} />
				)}
			</StyledCol>
			<StyledCol md={{ offset: 1, span: 10 }} xs={24}>
				<StyledTitle fontSize={{ md: "40px", xs: "20px" }} color=" #002434" mb="0" mt="20px">
					{singleProduct?.productName}
				</StyledTitle>
				<StyledText>{singleProduct?.productInfo}</StyledText>

				<Description title="SYSTEM" data={singleProduct?.productSystem} />
				<Description title="ADVANTAGES" data={singleProduct?.productAdvantages} />
				<Description title="INSTRUMENTATION" data={singleProduct?.productInstrumentation} />
				<Description
					title="Combination with thoracolumbar System uCentum™"
					data={singleProduct?.productCombination}
				/>
			</StyledCol>
			<StyledCol md={5} xs={24}>
				<StyledRow gutter={[16, 16]}>{renderOptions}</StyledRow>
			</StyledCol>
		</StyledRow>
	);
};

export default ProductDetails;
