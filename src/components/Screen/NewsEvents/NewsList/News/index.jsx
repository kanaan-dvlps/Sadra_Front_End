import { StyledDiv, StyledH3, StyledImage, StyledRow, StyledText } from '@/components/Common';
import { SET_SINGLE_NEWS } from '@/store/news-events/newsEvents.constants';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from "next/router";
import { useGetNews } from '@/api/api.news';

const News = () => {
    const { single_news } = useSelector(state => state.newsEvent);
    const router = useRouter();
    const dispatch = useDispatch();
    const [isSinglePageLoaded, setIsSinglePageLoaded] = useState(false);
    const { isSuccess, data } = useGetNews(isSinglePageLoaded);
    const { news } = router.query;

    useEffect(() => {
        if (!single_news && news) {
            setIsSinglePageLoaded(true);
        }
    }, [single_news, router.query]);

    useEffect(() => {
        if (isSuccess && data) {
            const singlenNews = data.find(item => item.newsTitle == news);
            dispatch({
                type: SET_SINGLE_NEWS,
                payload: {
                    ...singlenNews
                },
            })
        }
    }, [isSuccess]);
    return (
        <StyledDiv p='24px'>
            <StyledImage width='100%' src={single_news?.newsImages} />
            <StyledH3>
                {single_news?.newsTitle}
            </StyledH3>
            <StyledText color=" #002434 " fontSize="10px">
                {single_news?.newsArticle}
            </StyledText>
        </StyledDiv>
    )
}

export default News;