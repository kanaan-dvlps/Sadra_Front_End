import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { StyledCustomBlueBorderedDiv, StyledDiv } from "@/components/Common";
import { StyledImage } from "@/components/Common/image.styles";

const DesktopCarousel = ({ items }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	const swiper1Slides = items?.map(item => (
		<SwiperSlide key={item}>
			<StyledCustomBlueBorderedDiv

			>
				<StyledImage alt='product' fill src={item} borderRadius="50%" />
			</StyledCustomBlueBorderedDiv>
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
				<StyledImage alt='product' src={item} width={60} height={60} borderRadius="50%" />
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
