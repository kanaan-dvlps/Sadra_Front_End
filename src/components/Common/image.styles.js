import Image from "next/future/image";
import styled, { css } from "styled-components";

export const ImageWrapper = styled.div`
	height: ${props => props.height || "400px"};
	width: ${props => props.width || "100%"};
	position: relative;
	${props => props.centerImage && css`
		display: flex;
		justify-content: center;
		align-items: center;
	`};
	@media screen and (max-width:490px){
		height: ${props => props.mobileHeight || "315px"};
		width: ${props => props.mobileWidth};

	};
`
export const StyledImage = styled(Image)`
	object-fit: ${props => props.objectFit || "contain"};
`