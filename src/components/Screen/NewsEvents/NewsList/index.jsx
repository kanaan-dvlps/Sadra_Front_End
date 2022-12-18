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

const NewsList = () => {
	const { isLoading, data } = useGetNews();
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
		</StyledRow>
	);
};
export default NewsList;
