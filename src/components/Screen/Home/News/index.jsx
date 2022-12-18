import {
	StyledCustomBtn,
	StyledCol,
	StyledDiv,
	StyledH1,
	StyledImage,
	StyledRow,
	StyledText,
} from "@/components/Common";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import { news } from "@/utils/home";

const News = () => {
	const isDesktop = useMediaQuery("(min-width: 960px)");

	const newsItems = news.map(({ id, title, description, image }, index) => (
		<StyledRow
			py="30px"
			key={id}
			flexDirection={index % 2 === 0 && isDesktop ? "row" : "row-reverse "}
		>
			<StyledCol md={12} xs={24} px="30px">
				<StyledImage width="100%" borderRadius="15px" src={image} />
			</StyledCol>
			<StyledCol md={12} xs={24} px="30px">
				<StyledH1 fontSize="32px" fontWeight="600">
					{title}
				</StyledH1>
				<StyledText fontSize="18px">{description}</StyledText>
			</StyledCol>
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
