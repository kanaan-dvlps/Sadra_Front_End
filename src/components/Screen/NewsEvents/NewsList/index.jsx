import { useGetNews } from "@/api/api.news";
import {
	StyledCol,
	StyledDiv,
	StyledH3,
	StyledImage,
	StyledRow,
	StyledText,
} from "@/components/Common";
import ComingSoon from "@/components/Common/ComingSoon";
import Loading from "@/components/Common/Loading";
import { Pagination } from 'antd';
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SET_SINGLE_NEWS } from "@/store/news-events/newsEvents.constants";
import { useDispatch } from "react-redux";
const NewsList = () => {
	const { isLoading, data } = useGetNews(true);
	const numEachPage = 8;
	const [dataCount, setDataCount] = useState({
		start: 0,
		end: numEachPage
	})
	const OnPageChange = (count) => {
		setDataCount({
			start: (count - 1) * numEachPage,
			end: count * numEachPage
		})
	}
	const router = useRouter();
	const dispatch = useDispatch();

	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;

	return (
		<>
			<StyledRow>

				{data?.slice(dataCount.start, dataCount.end).map(({ _id, newsTitle, newsArticle, newsImages }) => (
					<Link key={_id} href={`${router.asPath}/${newsTitle}`} passHref>
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
							<StyledDiv p="25px 12px">
								<StyledImage src={newsImages?.[0]} width="100%" borderRadius="10px" />
								<StyledH3 fontWeight="600" mt="15px" color="#002434">
									{newsTitle}
								</StyledH3>
								<StyledText color=" #002434 " fontSize="10px">
									{newsArticle}
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
