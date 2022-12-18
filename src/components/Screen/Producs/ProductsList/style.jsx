import styled from "@emotion/styled";

export const StyledProductImageDiv = styled.div`
	@media screen and (max-width: 960px) {
		width: 100px;
		height: 100px;
		border: 3px solid #6fcbdf;
	}
	@media screen and (min-width: 960px) {
		width: 200px;
		height: 200px;
		border: 5px solid #6fcbdf;
	}
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 5px solid #6fcbdf;
	padding: 10px;
	margin: 0 auto;
`;
