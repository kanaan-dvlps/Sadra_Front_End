import styled from "@emotion/styled";
import { Divider } from "antd";

export const StyledDivider = styled(Divider)`
	&:before,
	&:after {
		border-top: 2px solid rgba(6, 103, 124, 0.64) !important;
		border-top-color: rgba(6, 103, 124, 0.64) !important;
	}
`;
