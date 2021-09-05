import { css } from "@emotion/react";
import { pxToRem } from "helpers/utils/pxToRem";

export const stySider = (theme: any) => css`
	min-height: 100vh;
	.trigger {
		padding: 0 24px;
		font-size: ${pxToRem(18)};
		line-height: 64px;
		cursor: pointer;
		transition: color 0.3s;
	}

	.ant-layout-sider,
	.ant-menu-dark {
		background: ${theme.colors.secondary};
	}

	.trigger:hover {
		color: ${theme.colors.primary};
	}

	.logo-sidebar {
		height: 64px;
		padding: 10px;
		div {
			height: 100%;
		}
	}

	.menu-account {
		display: flex;
		justify-content: flex-end;
		.name {
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 14px;
			color: #000000;
		}
		.ant-dropdown-trigger {
			margin-right: 16px;
		}
		.wrapper {
			cursor: pointer;
			.icon-style {
				font-size: 12px;
			}
		}
	}

	.site-layout .site-layout-background {
		background: ${theme.colors.light};
	}
`;

export const styLogout = css`
	height: 100%;
`;
