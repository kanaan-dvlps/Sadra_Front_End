import { StyledCol, StyledH1, StyledImage, StyledRow, StyledText } from "@/components/Common";
import Link from "next/link";
import { StyledImageCard } from "./style";

const Company = () => {
	return (
		<>
			<StyledH1 fontWeight=" 700" fontSize="37px">
				Company
			</StyledH1>
			<StyledText fontSize="20px">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend purus mi blandit dolor.
				Ultrices risus eget pharetra integer lectus vestibulum felis pretium. Faucibus volutpat at
				dolor ultrices.
			</StyledText>
			<StyledRow mt="50px">
				<StyledCol span={12}>
					<Link href="/aboutUs">
						<a>
							<StyledImageCard>
								<StyledImage width="100%" height="100%" src="/images/company/aboutUs.svg" />
							</StyledImageCard>
							<StyledH1 fontSize="25px" textAlign="center">
								About Us
							</StyledH1>
						</a>
					</Link>
				</StyledCol>
				<StyledCol span={12}>
					<Link href="/contactUs">
						<a>
							<StyledImageCard>
								<StyledImage width="100%" height="100%" src="/images/company/contactUs.svg" />
							</StyledImageCard>
							<StyledH1 fontSize="25px" textAlign="center">
								Contact Us
							</StyledH1>
						</a>
					</Link>
				</StyledCol>
			</StyledRow>
		</>
	);
};

export default Company;
