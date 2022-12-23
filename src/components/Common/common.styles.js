import styled from "styled-components";

const blue = `var(--blue)`;

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