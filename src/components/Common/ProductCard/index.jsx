import {
	StyledCol,
	StyledCustomBtn,
	StyledDiv,
	StyledDivider,
	StyledRow,
	StyledTitle,
	StyledUl,
} from "@/components/Common";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import { ListItem } from "../common.styles";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";
const ProductCard = ({ id, title, subTitle, image, options }) => {
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const renderOptions = options.map(option => (
		<ListItem key={id}>
			{option}
		</ListItem>
	));
	return (
		<StyledDiv>
			<StyledRow>
				<StyledCol offset={2} md={10} xs={24}>
					<StyledTitle fontSize={{ md: "100px", xs: "40px" }} fontWeight="900" mb="0">
						{title}
					</StyledTitle>
					<StyledTitle fontSize={{ md: "22px", xs: "18px" }}>{subTitle}</StyledTitle>
					<StyledDivider borderTop="2px solid #D5623D" mb="10px" />
					{isDesktop && <StyledUl p="0" style={{ listStyle: 'none' }}>{renderOptions}</StyledUl>}
				</StyledCol>
				<StyledCol md={6} offset={4} xs={20} display="flex" alignItems="center">
					<ImageWrapper height='440px' mobileHeight='310px'>
						<StyledImage alt="product" fill src={image} />

					</ImageWrapper>
				</StyledCol>
				<StyledDiv pt="30px" width="100%" display="flex" justifyContent="center">
					<StyledCustomBtn>show more</StyledCustomBtn>
				</StyledDiv>
			</StyledRow>
		</StyledDiv >
	);
};


export default ProductCard;
