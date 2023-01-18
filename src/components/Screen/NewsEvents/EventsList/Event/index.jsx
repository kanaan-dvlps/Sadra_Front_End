import React, { useEffect, useState } from 'react'
import { StyledDiv, StyledH3, StyledText } from '@/components/Common';
import { SET_SINGLE_EVENT } from '@/store/news-events/newsEvents.constants';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { useGetEvents } from '@/api/api.events';
import { Layout } from 'antd';
import useMediaQuery from "@/components/hooks/useMediaQuery";
import { ImageWrapper, StyledImage } from '@/components/Common/image.styles';

const { Content, Sider } = Layout;



const Event = () => {
    const { single_event } = useSelector(state => state.newsEvent);
    const router = useRouter();
    const dispatch = useDispatch();
    const [isSinglePageLoaded, setIsSinglePageLoaded] = useState(false);
    const { isSuccess, data } = useGetEvents(isSinglePageLoaded);
    const { event } = router.query;
    const isDesktop = useMediaQuery("(min-width: 960px)");

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
    const EventDetails = () => {
        return (
            <>
                <StyledDiv py="25px">
                    <StyledH3 fontSize="22px" color="#002434">Event Name</StyledH3>
                    <StyledText>{single_event?.eventName}</StyledText>
                </StyledDiv>
                <StyledDiv py="25px">
                    <StyledH3 fontSize="22px" color="#002434">Event Place</StyledH3>
                    <StyledText>{single_event?.eventPlace}</StyledText>
                </StyledDiv>
                <StyledDiv py="25px">
                    <StyledH3 fontSize="22px" color="#002434">Event Holder</StyledH3>
                    <StyledText>{single_event?.eventHolder}</StyledText>
                </StyledDiv>
                <StyledDiv py="25px">
                    <StyledH3 fontSize="22px" color="#002434">Event Date</StyledH3>
                    <StyledText>{single_event?.eventDate}</StyledText>
                </StyledDiv>
            </>
        )
    }
    return (
        <Layout style={{ background: 'transparent' }} >
            <Content >
                <StyledDiv p='24px' maxWidth='1000px' m='0 auto'>
                    <StyledH3 fontWeight="600">
                        {single_event?.eventName}
                    </StyledH3>
                    <ImageWrapper style={{ margin: '16px 0' }} height='400px' mobileHeight='200px'>
                        <StyledImage objectFit='cover' fill alt='event' src={single_event?.eventsImages[0]} />

                    </ImageWrapper>

                    <StyledText color=" #002434 " fontSize="16px" fontWeight="400">
                        {single_event?.eventDescription}
                    </StyledText>
                    {
                        !isDesktop && (
                            <EventDetails />
                        )
                    }
                </StyledDiv>
            </Content>
            {
                isDesktop && (
                    <Sider style={{ background: 'transparent' }} width='200'>
                        <EventDetails />
                    </Sider>
                )
            }

        </Layout>

    )
}


export default Event;