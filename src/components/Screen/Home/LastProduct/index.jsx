import React from "react";
import { SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { StyledCarousel } from "./style";
import { products } from "@/utils/home";
import ProductCard from "@/components/Common/ProductCard";
import { StyledDiv } from "@/components/Common";
const LastProduct = () => {
	const productItems = products.map(({ id, title, subTitle, image, options }) => (
		<SwiperSlide>
			<ProductCard
				key={id}
				id={id}
				title={title}
				subTitle={subTitle}
				image={image}
				options={options}
			/>
		</SwiperSlide>
	));
	return (
		<StyledDiv>
			<StyledCarousel navigation={true} modules={[Navigation]} className="mySwiper">
				{productItems}
			</StyledCarousel>
		</StyledDiv>
	);
};

export default LastProduct;
