import styled from "@emotion/styled";
import {
	Button,
	Col,
	Divider,
	Image,
	Input,
	InputNumber,
	Layout,
	Menu,
	Row,
	Select,
	Tabs,
	Typography,
} from "antd";
import { system, compose } from "styled-system";
import {
	space,
	color,
	layout,
	border,
	flexbox,
	position,
	shadow,
	typography,
	fontSize,
	background,
	borderColor,
	grid,
} from "styled-system";
const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;
const Compose = compose(
	space,
	color,
	layout,
	border,
	flexbox,
	position,
	shadow,
	typography,
	background,
	grid,
	fontSize,
	borderColor,
	system({
		textDecoration: true,
	})
);
const commonStyle = (component, style = "") => styled(component)`
	${Compose}
`;
export const StyledLayout = commonStyle(Layout);
export const StyledSider = commonStyle(Sider);
export const StyledContent = commonStyle(Content);
export const StyledHeader = commonStyle(Header);
export const StyledDiv = commonStyle("div");
export const StyledMenu = commonStyle(Menu);
export const StyledSubMenu = commonStyle(Menu.SubMenu);
export const StyledInput = commonStyle(Input);
export const StyledInputNumber = commonStyle(InputNumber);
export const StyledSelect = commonStyle(Select);
export const StyledText = commonStyle(Text);
export const StyledButton = commonStyle(Button);
export const StyledImage = commonStyle("img");
export const StyledTextArea = commonStyle(Input.TextArea);
export const StyledH1 = commonStyle("h1");
export const StyledH2 = commonStyle("h2");
export const StyledH3 = commonStyle("h3");
export const StyledH4 = commonStyle("h4");
export const StyledH5 = commonStyle("h5");
export const StyledH6 = commonStyle("h6");
export const StyledUl = commonStyle("ul");
export const StyledLi = commonStyle("li");
export const StyledDivider = commonStyle(Divider);
export const StyledRow = commonStyle(Row);
export const StyledCol = commonStyle(Col);
export const StyledA = commonStyle("a");

export const StyledCustomBtn = styled(StyledButton)`
	background: #d5623d !important;
	border-color: #d5623d !important;
	color: #f9feff !important;
	border-radius: 30px;
	height: 40px;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ fontSize }) => fontSize ?? "18px"};
	width: 170px;

	@media screen and (min-width: 960px) {
		width: 230px;
	}
	@media screen and (max-width: 960px) {
		width: 170px;
		font-size: 14px;
	}
`;
export const StyledMenuItem = styled(Menu.Item)`
	${space}
	${layout}
	padding-bottom:15px !important;
	&.ant-menu-item-selected::after {
		border-bottom: 2px solid #d5623d !important;
	}
	${({ active }) =>
		`
	a {
		color: var(--text-color) !important;
		font-size:17px;
		font-weight:400;
		&:hover{
			color: #000 !important;
		}
	}
	&:hover{
		&:after{
			border-bottom: 2px solid #D5623D !important;	
		}
	}
	&:after{
		right: 25px !important;
		left: 25px !important;
	}
	${active &&
		`
		&:after{
			border-bottom: 2px solid #D5623D !important;
		}
		
		`
		}
	
`}
`;
export const StyledStack = styled(StyledDiv)`
	@media screen and (min-width: 960px) {
		padding: 30px 130px;
	}
	@media screen and (max-width: 960px) {
		padding: 15px;
	}
`;
export const StyledCustomDivider = styled(Divider)`
	${({ right }) =>
		right
			? `
	&:before {
		border: none !important;
	}
	&:after {
		border-top: 2px solid rgba(6, 103, 124, 0.64) !important;
		border-top-color: rgba(6, 103, 124, 0.64) !important;
	}
	`
			: `
	&:before {
		border-top: 2px solid rgba(6, 103, 124, 0.64) !important;
		border-top-color: rgba(6, 103, 124, 0.64) !important;
	}
	&:after {
		border: none !important;
	}
	`}
`;
export const StyledTitle = styled(StyledH1)`
	@media screen and (min-width: 960px) {
		font-size: ${({ fontSize }) => fontSize.md};
	}
	@media screen and (max-width: 960px) {
		font-size: ${({ fontSize }) => fontSize.xs};
	}
`;

export const StyledCustomInput = styled(StyledInput)`
	border: 1px solid #06677c;
	border-radius: 5px;
	height: 44px;
	color: #002434;
`;
export const StyledCustomInputNumber = styled(StyledInputNumber)`
	border: 1px solid #06677c;
	border-radius: 5px;
	height: 44px;
	color: #002434;
	.ant-input-number-input-wrap {
		height: 100%;
		input {
			height: 100%;
		}
	}
`;
export const StyledCustomSelect = styled(StyledSelect)`
	.ant-select-selector {
		border: 1px solid #06677c !important;
		border-radius: 5px !important;
		height: 44px !important;
		color: #002434 !important;
		.ant-select-selection-item {
			line-height: 44px !important;
		}
	}
`;
export const StyledCustomTextArea = styled(StyledTextArea)`
	border: 1px solid #06677c;
	border-radius: 5px;
	color: #002434;
`;

export const StyledTabs = styled(Tabs)`
	.ant-tabs-ink-bar {
		background: #6fcbdf !important;
	}
	.ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
		color: #6fcbdf !important;
	}
	.ant-tabs-tab-btn:focus,
	.ant-tabs-tab-remove:focus,
	.ant-tabs-tab-btn:active,
	.ant-tabs-tab-remove:active {
		color: #6fcbdf !important;
	}
`;
