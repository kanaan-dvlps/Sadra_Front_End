import styled from "@emotion/styled";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 18px;
	@media (min-width: 768px) {
		${({ border }) =>
			border &&
			`
        border-width:0px 2px 0px 2px;
		border-style:solid;
		border-color: #06677C;
		`}
	}
`;
