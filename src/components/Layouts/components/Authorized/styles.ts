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

	.site-layout .site-layout-background {
		background: ${theme.colors.light};
	}
`;

export const styLogout = css`
	height: 100%;
	margin: 0 24px;
	float: right;
`;
