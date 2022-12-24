import {
	StyledCustomBtn,
	StyledCol,
	StyledDiv,
	StyledH1,
	StyledImage,
	StyledRow,
	StyledText,
} from "@/components/Common";
import { SecondaryLink, Text } from "@/components/Common/common.styles";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import { news } from "@/utils/home";

const News = () => {
	const isDesktop = useMediaQuery("(min-width: 960px)");

	const newsItems = news.map(({ id, title, description, image }, index) => (
		<StyledRow
			py="30px"
			key={id}
			flexDirection={index % 2 === 0 && isDesktop ? "row-reverse" : "row "}
		>
			<StyledCol md={12} xs={24} px="30px">
				<StyledImage filter='drop-shadow(2px 4px 5px rgba(128, 201, 217, 0.17))' border="1px solid var(--blue)" maxWidth='470px' width="100%" borderRadius="10px" src={image} />
			</StyledCol>
			<div style={{ maxWidth: '800px' }}>
				<StyledCol md={18} xs={24} px="30px">
					<StyledH1 fontSize="32px" fontWeight="600">
						{title}
					</StyledH1>
					<Text fontSize="18px" padding='0 0 0 24px'>{description}<SecondaryLink>LOAD MORE</SecondaryLink></Text>
				</StyledCol>
			</div>

		</StyledRow>
	));
	return (
		<StyledDiv pb="90px">
			{newsItems}
			<StyledDiv display="flex" justifyContent="center">
				<StyledCustomBtn mx="auto" href="/news-events">
					show more
				</StyledCustomBtn>
			</StyledDiv>
		</StyledDiv>
	);
};

export default News;
