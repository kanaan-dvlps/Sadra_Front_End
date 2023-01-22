import {
	StyledCustomBtn,
	StyledCol,
	StyledDiv,
	StyledH1,
	StyledRow,
} from "@/components/Common";
import { SecondaryLink, Text } from "@/components/Common/common.styles";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import Link from "next/link";
import { useGetNews } from "@/api/api.news";

const News = () => {
	const { isLoading, data } = useGetNews(true);
	const isDesktop = useMediaQuery("(min-width: 960px)");
	const newsItems = data?.slice(0, 2).map(({ _id, newsTitle, newsArticle, newsImages }, index) => (
		<StyledRow
			py="30px"
			key={_id}
			flexDirection={index % 2 === 0 && isDesktop ? "row-reverse" : "row "}
		>
			<StyledCol md={12} xs={24} px="30px">
				<ImageWrapper maxWidth='470px' mobileHeight='153px' height='251px' style={{ filter: 'drop-shadow(2px 4px 5px rgba(128, 201, 217, 0.17))' }}>
					<StyledImage fill alt="news" objectFit='cover' borderRadius="10px" src={newsImages.length > 0 && newsImages[0]} border='1px solid var(--blue)' />

				</ImageWrapper>
			</StyledCol>
			<div style={{ maxWidth: '800px' }}>
				<StyledCol md={18} xs={24} px="30px">
					<StyledH1 fontSize="32px" fontWeight="600">
						{newsTitle}
					</StyledH1>
					<Text fontSize="18px" padding='0 0 0 24px'>{newsArticle?.slice(0, 200).concat('...')}
						<Link href={`/news-events/news/${newsTitle}`} passHref>
							<SecondaryLink>LOAD MORE</SecondaryLink>
						</Link>
					</Text>
				</StyledCol>
			</div>

		</StyledRow>
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

export default News;
