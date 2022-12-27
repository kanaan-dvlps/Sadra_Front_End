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
import { useEffect, useState } from "react";

const NewsList = () => {
	const { isLoading, data } = useGetNews();
	const numEachPage = 5;
	console.log(data, '========data');
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
	useEffect(() => {
		console.log(dataCount, '===========dataCount');
	}, [dataCount])
	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;
	return (
		<StyledRow>
			{data?.map(({ _id, newsTitle, newsArticle, newsImages }) => (
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
			<Pagination
				defaultCurrent={1}
				defaultPageSize={numEachPage}
				onChange={OnPageChange}
				total={Math.ceil((10) / numEachPage)} />
		</StyledRow>
	);
};
export default NewsList;
