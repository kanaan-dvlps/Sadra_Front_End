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
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { SET_SINGLE_EVENT } from "@/store/news-events/newsEvents.constants";
import { useDispatch } from "react-redux";
import useMediaQuery from "@/components/hooks/useMediaQuery";


const EventsList = () => {
	const { isLoading, data } = useGetEvents(true);
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
				{data?.slice(dataCount.start, dataCount.end).map(({ _id, eventName, eventDescription, eventsImages, eventPlace, eventHolder, eventDate }) => (
					<Link key={_id} href={`${router.asPath}/event/${eventName}`} passHref>

						<StyledCol
							onClick={() => {
								dispatch({
									type: SET_SINGLE_EVENT,
									payload: {
										_id,
										eventName,
										eventDescription,
										eventsImages,
										eventHolder,
										eventPlace,
										eventDate
									},
								})
							}}
							lg={6} md={8} sm={12} xs={24}>
							<StyledDiv p="25px 12px" style={{ cursor: 'pointer' }}>
								<StyledImage style={{ objectFit: 'fill' }} src={eventsImages?.[0]} width="100%" borderRadius="10px" height="200px" border='1px solid var(--light-blue)' />
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
