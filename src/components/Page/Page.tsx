import React from "react";
import Head from "next/head";

const preview = "/icons/icon-512x512.png";

const Page = ({
	title = "Sikap Menpan",
	description = "Sikap Menpan Apps",
	image = preview,
	children,
}) => (
	<React.Fragment>
		<Head>
			<meta httpEquiv="" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, maximum-scale=5"
			/>
			<meta name="description" content={description} />
			<link rel="manifest" href="/manifest.json" />
			<meta name="theme-color" content="#001529" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:image" content={image} />
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/favicon-16x16.png"
			/>
			<link rel="shortcut icon" href="/favicon-16x16.png" />
			<title>{`${title} | ${description}`}</title>
		</Head>
		{children}
	</React.Fragment>
);

export { Page };
