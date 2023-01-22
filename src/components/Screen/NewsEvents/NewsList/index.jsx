import { useGetNews } from "@/api/api.news";
import {
	StyledCol,
	StyledDiv,
	StyledH3,
	StyledRow,
	StyledText,
} from "@/components/Common";
import ComingSoon from "@/components/Common/ComingSoon";
import Loading from "@/components/Common/Loading";
import { Pagination } from 'antd';
import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SET_SINGLE_NEWS } from "@/store/news-events/newsEvents.constants";
import { useDispatch } from "react-redux";
import useMediaQuery from "@/components/hooks/useMediaQuery";
import { ImageWrapper, StyledImage } from "@/components/Common/image.styles";

const NewsList = () => {
	const { isLoading, data } = useGetNews(true);
	const numEachPage = 8;
	const [dataCount, setDataCount] = useState({
		start: 0,
		end: numEachPage
	})
	const pageTopRef = useRef(null);
	const isDesktop = useMediaQuery("(min-width: 960px)");

	const OnPageChange = (count) => {
		setDataCount({
			start: (count - 1) * numEachPage,
			end: count * numEachPage
		})
		!isDesktop && pageTopRef.current.scrollIntoView();

	}

	const router = useRouter();
	const dispatch = useDispatch();

	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;

	return (
		<>
			<StyledRow ref={pageTopRef}>

				{data?.slice(dataCount.start, dataCount.end).map(({ _id, newsTitle, newsArticle, newsImages }) => (
					<Link key={_id} href={`${router.asPath}/news/${newsTitle}`} passHref>
						<StyledCol
							onClick={() => {
								dispatch({
									type: SET_SINGLE_NEWS,
									payload: {
										_id,
										newsTitle,
										newsArticle,
										newsImages
									},
								})
							}}
							lg={6} md={8} sm={12} xs={24}>
							<StyledDiv p="25px 12px" style={{ cursor: 'pointer' }}>
								<ImageWrapper height="200px" mobileHeight="200px" objectFit='fill'>
									<StyledImage objectFit='fill' fill src={newsImages?.[0]} borderRadius="10px" border='1px solid var(--light-blue)' />

								</ImageWrapper>
								<StyledH3 fontWeight="600" mt="15px" color="#002434">
									{newsTitle}
								</StyledH3>
								<StyledText color=" #002434 " fontSize="10px">
									{newsArticle.slice(0, 200)}
								</StyledText>
							</StyledDiv>
						</StyledCol>
					</Link>
				))}

			</StyledRow>
			<StyledDiv
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<Pagination
					defaultCurrent={1}
					defaultPageSize={numEachPage}
					onChange={OnPageChange}
					total={data?.length} />
			</StyledDiv>
		</>

	);
};
export default NewsList;
