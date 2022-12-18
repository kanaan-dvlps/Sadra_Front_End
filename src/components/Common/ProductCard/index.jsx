import {
	StyledCol,
	StyledCustomBtn,
	StyledDiv,
	StyledDivider,
	StyledImage,
	StyledLi,
	StyledRow,
	StyledTitle,
	StyledUl,
} from "@/components/Common";
import useMediaQuery from "@/components/hooks/useMediaQuery";
const ProductCard = ({ id, title, subTitle, image, options }) => {
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const renderOptions = options.map(option => (
		<StyledLi fontSize="18px" key={id}>
			{option}
		</StyledLi>
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
					{isDesktop && <StyledUl p="0">{renderOptions}</StyledUl>}
				</StyledCol>
				<StyledCol md={6} offset={4} xs={20} display="flex" alignItems="center">
					<StyledImage width="100%" src={image} />
				</StyledCol>
				<StyledDiv pt="30px" width="100%" display="flex" justifyContent="center">
					<StyledCustomBtn>show more</StyledCustomBtn>
				</StyledDiv>
			</StyledRow>
		</StyledDiv>
	);
};

export default ProductCard;
