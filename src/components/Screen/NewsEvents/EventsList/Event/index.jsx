import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledH3, StyledImage, StyledRow, StyledText } from '@/components/Common';
import { SET_SINGLE_EVENT } from '@/store/news-events/newsEvents.constants';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { useGetEvents } from '@/api/api.events';
const Event = () => {
    const { single_event } = useSelector(state => state.newsEvent);
    const router = useRouter();
    const dispatch = useDispatch();
    const [isSinglePageLoaded, setIsSinglePageLoaded] = useState(false);
    const { isSuccess, data } = useGetEvents(isSinglePageLoaded);
    const { event } = router.query;

    useEffect(() => {
        if (!single_event && event) {
            setIsSinglePageLoaded(true);
        }
    }, [single_event, router.query]);

    useEffect(() => {
        if (isSuccess && data) {
            const singlenEvent = data.find(item => item.eventName == event);
            dispatch({
                type: SET_SINGLE_EVENT,
                payload: {
                    ...singlenEvent
                },
            })
        }
    }, [isSuccess]);
    return (
        <StyledDiv p='24px'>
            <StyledImage width='100%' src={single_event?.eventsImages} />
            <StyledH3>
                {single_event?.eventName}
            </StyledH3>
            <StyledText color=" #002434 " fontSize="10px">
                {single_event?.eventDescription}
            </StyledText>
        </StyledDiv>
    )
}

export default Event;