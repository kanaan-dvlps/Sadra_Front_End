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
						Stability requires solid principles« The treatment of diseases of the spine, one of the
						most sensitive structures of the human skeleton, keeps presenting us with enormous
						challenges. But we would not be a successful manufacturer of spinal implants if we did
						not master these challenges with ever increasing consistency, innovative thinking, and
						technical competence.
					</StyledText>
				</StyledCol>
			</StyledRow>
			<StyledRow mt="50px">{productVariantItems}</StyledRow>
		</>
	);
};

export default SpinalSystem;
