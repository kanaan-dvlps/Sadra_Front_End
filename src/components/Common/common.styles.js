import styled from "styled-components";

const blue = `var(--blue)`;
const orange = `var(--orange)`;


export const ListItem = styled.li`
	font-size: 18px;
	position: relative;
	&::before {
		content: "•";
		color: ${blue};
		position: absolute;
		left: -16px;
	}

`;

export const SecondaryLink = styled.a`
	color: ${orange} !important;
	text-decoration: underline !important;
`;

export const Text = styled.p`
	color:#000;
	font-size: ${props => props.fontSize || '1rem'};
	padding: ${props => props.padding};
	margin: ${props => props.margin};
`;