import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { StyledImage } from "@/components/Common";
const MobileCarousel = ({ items }) => {
	const swiperSlides = items?.map(item => (
		<SwiperSlide key={item}>
			<StyledImage src={item} width="100%" height="100%" borderRadius="50%" />
		</SwiperSlide>
	));
	return (
		<Swiper loop={true} className="mobileSwiper" navigation={true} modules={[Navigation]}>
			{swiperSlides}
		</Swiper>
	);
};

export default MobileCarousel;
