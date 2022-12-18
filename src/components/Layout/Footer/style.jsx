import styled from "@emotion/styled";
import { Breadcrumb } from "antd";

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	background: linear-gradient(170.18deg, #f5fdff -3.52%, #6fcbdf 125.96%);
`;
export const StyledFooterStack = styled.div`
	background: #06677c;
	height: 50px;
	width: 100%;
`;
export const StyledBreadcrumb = styled(Breadcrumb)`
	font-weight: 600;
	font-size: 28px;
	line-height: 33px;
	li {
		padding: 15px;
	}
	.ant-breadcrumb-link {
		color: #002434 !important;
	}
	.ant-breadcrumb-separator {
		margin: 0 25px;
		color: #002434 !important;
	}
`;
