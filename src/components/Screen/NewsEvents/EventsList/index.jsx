import { useGetEvents } from "@/api/api.events";
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

const EventsList = () => {
	const { isLoading, data } = useGetEvents();
	if (isLoading) return <Loading />;
	if (!data) return <ComingSoon />;
	return (
		<StyledRow>
			{data?.map(({ _id, eventName, eventDescription, eventsImages }) => (
				<StyledCol key={_id} lg={6} md={8} sm={12} xs={24}>
					<StyledDiv p="25px 12px">
						<StyledImage src={eventsImages?.[0]} width="100%" borderRadius="10px" />
						<StyledH3 fontWeight="600" mt="15px" color="#002434">
							{eventName}
						</StyledH3>
						<StyledText color=" #002434 " fontSize="10px">
							{eventDescription}
						</StyledText>
					</StyledDiv>
				</StyledCol>
			))}
		</StyledRow>
	);
};
export default EventsList;
