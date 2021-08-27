import { css } from "@emotion/react";

export const styDate = css`
	padding: 10px 0;
	font-size: 14px;
`;

export const styDateFirst = css`
	${styDate}
	position: relative;
	&:before {
		content: "";
		height: 2px;
		width: 185px;
		background: #ffc041;
		position: absolute;
		bottom: 0;
		left: 0;
	}
`;
