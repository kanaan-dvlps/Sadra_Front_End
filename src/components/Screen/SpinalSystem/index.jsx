import {
	StyledCol,
	StyledH1,
	StyledRow,
	StyledText,
	StyledTitle,
} from "@/components/Common";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";
import { productVariants } from "@/utils/spinalSystem";
import Link from "next/link";
import { FormattedMessage } from 'react-intl'

const SpinalSystem = () => {
	const productVariantItems = productVariants.map(({ variant, image, title }) => (
		<StyledCol key={variant} md={6} xs={{ span: 12 }} p="15px">
			<Link href={`/spine-system/${variant}/products`}>
				<a>
					<ImageWrapper mobileHeight='150px'>
						<StyledImage src={image} fill />

					</ImageWrapper>
					<StyledTitle textAlign="center" fontSize={{ md: "25px", xs: "18px" }} mt="25px">
						{title}
					</StyledTitle>
				</a>
			</Link>
		</StyledCol>
	));
	return (
		<>
			<StyledRow>
				<StyledCol md={16} xs={24}>
					<StyledH1 fontSize="37px" fontWeight="700">
						Spinal Systems
					</StyledH1>

					<StyledText fontSize="18px">
						<FormattedMessage id="spinal-systems-description" />
					</StyledText>
				</StyledCol>
			</StyledRow>
			<StyledRow mt="50px">{productVariantItems}</StyledRow>
		</>
	);
};

export default SpinalSystem;
