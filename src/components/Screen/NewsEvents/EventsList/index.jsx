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
import { Pagination } from 'antd';
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { SET_SINGLE_EVENT } from "@/store/news-events/newsEvents.constants";
import { useDispatch } from "react-redux";


const EventsList = () => {
	const { isLoading, data } = useGetEvents(true);
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
				{data?.slice(dataCount.start, dataCount.end).map(({ _id, eventName, eventDescription, eventsImages }) => (
					<Link key={_id} href={`${router.asPath}/event/${eventName}`} passHref>

						<StyledCol
							onClick={() => {
								dispatch({
									type: SET_SINGLE_EVENT,
									payload: {
										_id,
										eventName,
										eventDescription,
										eventsImages
									},
								})
							}}
							lg={6} md={8} sm={12} xs={24}>
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
export default EventsList;
