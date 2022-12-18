import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { StyledDiv, StyledImage } from "@/components/Common";

const DesktopCarousel = ({ items }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiper1Slides = items?.map(item => (
		<SwiperSlide key={item}>
			<StyledDiv
				p=" 20px"
				border="5px solid #6fcbdf"
				borderRadius="50%"
				width="250px"
				height="250px"
				mx="auto"
			>
				<StyledImage src={item} width="100%" height="100%" borderRadius="50%" />
			</StyledDiv>
		</SwiperSlide>
	));
	const swiper2Slides = items?.map(item => (
		<SwiperSlide key={item}>
			<StyledDiv
				height="80px"
				width="80px"
				p="5px"
				border="3px solid #6FCBDF"
				borderRadius="50%"
				mx="auto"
			>
				<StyledImage src={item} width="100%" height="100%" borderRadius="50%" />
			</StyledDiv>
		</SwiperSlide>
	));

	return (
		<StyledDiv>
			<Swiper
				loop={true}
				spaceBetween={10}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Thumbs]}
				className="mySwiper2"
			>
				{swiper1Slides}
			</Swiper>
			<StyledDiv mt="20px">
				<Swiper
					onSwiper={setThumbsSwiper}
					spaceBetween={10}
					slidesPerView={3}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper"
				>
					{swiper2Slides}
				</Swiper>
			</StyledDiv>
		</StyledDiv>
	);
};

export default DesktopCarousel;
