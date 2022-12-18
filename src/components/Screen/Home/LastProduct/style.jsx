import styled from "@emotion/styled";
import { Swiper } from "swiper/react";

export const StyledCarousel = styled(Swiper)`
	.swiper-button-prev,
	.swiper-button-next {
		background: #ebf2f3;
		color: #d5623d !important;
		width: 61px;
		height: 61px;
		border-radius: 50%;
		&:after {
			font-size: 25px;
		}
	}
`;
