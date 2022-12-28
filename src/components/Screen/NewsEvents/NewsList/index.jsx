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

const NewsList = () => {
	const { isLoading, data } = useGetNews();
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
	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;

	return (
		<>
			<StyledRow>
				{data?.slice(dataCount.start, dataCount.end).map(({ _id, newsTitle, newsArticle, newsImages }) => (
					<StyledCol key={_id} lg={6} md={8} sm={12} xs={24}>
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
