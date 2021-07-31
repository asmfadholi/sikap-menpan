import { css } from "@emotion/react";

export const stySideImage = css`
	height: 100vh;
	position: relative;
	div {
		max-height: 100vh;
		width: 100%;
		img {
			height: 100vh;
			width: 100%;
			object-fit: cover;
		}
	}
	.mask {
		position: absolute;
		height: 100vh;
		width: 100%;
		background: #000;
		z-index: 2;
		top: 0;
		opacity: 0.5;
		left: 0px;
	}
`;

export const styFlexCentered = css`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const styFormContainer = css`
	${styFlexCentered}
`;

export const styLogo = css`
	${styFlexCentered}
	margin-bottom: 24px;
	img {
		border-radius: 5px;
	}
`;
