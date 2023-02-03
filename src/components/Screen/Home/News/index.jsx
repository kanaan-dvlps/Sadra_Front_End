import {
	StyledCustomBtn,
	StyledCol,
	StyledDiv,
	StyledH1,
	// StyledRow,
} from "@/components/Common";
import { SecondaryLink, Text } from "@/components/Common/common.styles";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import Link from "next/link";
import { useGetNews } from "@/api/api.news";
import styled from "styled-components";

const News = () => {
	const { isLoading, data } = useGetNews(true);
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const newsItems = data?.slice(0, 2).map(({ _id, newsTitle, newsArticle, newsImages }, index) => (
		// <StyledRow
		// 	py="30px"
		// 	key={_id}
		// 	flexDirection={index % 2 === 0 && isDesktop ? "row-reverse" : "row "}
		// >
		// 	<StyledCol md={12} xs={24} px="30px">
		// <ImageWrapper maxWidth='470px' mobileHeight='153px' height='251px' style={{ filter: 'drop-shadow(2px 4px 5px rgba(128, 201, 217, 0.17))' }}>
		// 	<StyledImage fill alt="news" objectFit='cover' borderRadius="10px" src={newsImages.length > 0 && newsImages[0]} border='1px solid var(--blue)' />

		// </ImageWrapper>
		// 	</StyledCol>
		// <div style={{ maxWidth: '800px' }}>
		// 	<StyledCol md={18} xs={24} px="30px">
		// 		<StyledH1 fontSize="32px" fontWeight="600">
		// 			{newsTitle}
		// 		</StyledH1>
		// 		<Text fontSize="18px" padding='0 0 0 24px'>{newsArticle?.slice(0, 200).concat('...')}
		// 			<Link href={`/news-events/news/${newsTitle}`} passHref>
		// 				<SecondaryLink>LOAD MORE</SecondaryLink>
		// 			</Link>
		// 		</Text>
		// 	</StyledCol>
		// </div>

		// </StyledRow>

		<NewsWrapper key={_id} reverse={index % 2 === 0 && isDesktop}>
			<ImageWrapper maxWidth='470px' mobileHeight='153px' height='251px' style={{ filter: 'drop-shadow(2px 4px 5px rgba(128, 201, 217, 0.17))', gridArea: 'img' }}>
				<StyledImage fill alt="news" objectFit='cover' borderRadius="10px" src={newsImages.length > 0 && newsImages[0]} border='1px solid var(--blue)' />

			</ImageWrapper>
			<DescWrapper reverse={index % 2 === 0 && isDesktop}>
				<StyledCol md={18} xs={24} px={isDesktop && "30px"}>
					<StyledH1 fontSize="32px" fontWeight="600">
						{newsTitle}
					</StyledH1>
					<Text fontSize="18px" padding='0 0 0 24px'>{newsArticle?.slice(0, 200).concat('...')}
						<Link href={`/news-events/news/${newsTitle}`} passHref>
							<SecondaryLink>LOAD MORE</SecondaryLink>
						</Link>
					</Text>
				</StyledCol>
			</DescWrapper>
		</NewsWrapper>
	));
	return (
		<StyledDiv pb="90px">
			{newsItems}
			<StyledDiv display="flex" justifyContent="center">
				<Link href="/news-events" passHref={true}>
					<StyledCustomBtn mx="auto" >
						show more
					</StyledCustomBtn>
				</Link>

			</StyledDiv>
		</StyledDiv>
	);
};

const NewsWrapper = styled.div`
	display: grid;
	grid-template-columns: ${props => props.reverse ? '1.5fr 1fr' : '1fr 1.5fr'};
	grid-template-areas: ${props => props.reverse ? `"desc img"` : `"img desc"`};
	margin-bottom:32px;
	@media screen and (max-width:960px){
		grid-template-columns:1fr;
		grid-template-rows:repeat(2, auto);
		grid-template-areas:'img' 'desc';
		gap:8px;
		justify-items:center;
	}
`;
const DescWrapper = styled.div`
	max-width: 800px;
	grid-area: desc;
	margin-left: ${props => props.reverse && '64px'};
`

export default News;
