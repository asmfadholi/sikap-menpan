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
		left: 0;
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
	div {
		width: 100px;
	}
	img {
		border-radius: 5px;
	}
`;

export const styBanner = css`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: auto;
	div {
		height: 100%;
		width: 100%;
	}
	img {
		object-fit: contain;
	}
`;
