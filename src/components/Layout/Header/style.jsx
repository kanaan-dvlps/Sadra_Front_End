import styled from "@emotion/styled";
import { Input } from "antd";

export const StyledContainer = styled.div`
	background: #e4f7fc;
	display: flex;
	@media screen and (min-width: 960px) {
		align-items: flex-end;
		justify-content: space-around;
		height: 110px;
	}
	@media screen and (max-width: 960px) {
		padding: 0 15px;
		justify-content: space-between;
		align-items: center;
		height: 85px;
	}
`;
export const StyledSearch = styled(Input)`
	background: transparent;
	border: none;
	border-bottom: 1.5px solid #002434 !important;
	input {
		background: transparent;
	}
`;

export const StyledLogo = styled.img`
	cursor: pointer;
	@media (min-width: 960px) {
		margin-top: 8px;
		width: 97px;
		height: 97px;
	}
	@media (max-width: 960px) {
		margin-top: 8px;
		width: 70px;
		height: 70px;
	}
`;
