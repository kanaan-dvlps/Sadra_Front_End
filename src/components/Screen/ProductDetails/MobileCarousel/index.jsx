import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { StyledImage } from "@/components/Common/image.styles";
import { StyledCustomBlueBorderedDiv } from "@/components/Common";

const MobileCarousel = ({ items }) => {
	const swiperSlides = items?.map(item => (
		<SwiperSlide key={item}>
			<StyledCustomBlueBorderedDiv>
				<StyledImage alt='product' fill src={item} borderRadius="50%" />
			</StyledCustomBlueBorderedDiv>
		</SwiperSlide>
	));
	return (
		<Swiper loop={true} className="mobileSwiper" navigation={true} modules={[Navigation]}>
			{swiperSlides}
		</Swiper>
	);
};

export default MobileCarousel;
