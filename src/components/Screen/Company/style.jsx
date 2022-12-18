import styled from "@emotion/styled";
export const StyledImageCard = styled.div`
	border: 3px solid #06677c;
	border-radius: 50%;
	margin: 15px auto;
	@media screen and (min-width: 960px) {
		width: 330px;
		height: 330px;
		padding: 112px 40px;
	}
	@media screen and (max-width: 960px) {
		width: 120px;
		height: 120px;
		padding: 30px 20px;
	}
`;
