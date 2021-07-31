import { useEffect, useState } from "react";
import Head from "next/head";
import "antd/dist/antd.css";

function HeadComponent() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	return (
		<Head>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				rel="preload"
				as="style"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
			/>
			<link
				rel="stylesheet"
				href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				media={isLoaded ? "all" : "print"}
			/>
			<noscript>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
				/>
			</noscript>
			<meta charSet="utf-8" />
			<meta http-equiv="X-UA-Compatible" content="IE=edge" />
			<meta
				name="viewport"
				content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
			/>
			<meta name="description" content="Sikap menpan apps" />
			<meta name="keywords" content="sikap menpan" />
			<title>Sikap Menpan</title>

			<link rel="manifest" href="/manifest.json" />
			<link
				href="/favicon-16x16.png"
				rel="icon"
				type="image/png"
				sizes="16x16"
			/>
			<link
				href="/favicon-32x32.png"
				rel="icon"
				type="image/png"
				sizes="32x32"
			/>
			<meta name="theme-color" content="#001529" />
		</Head>
	);
}

export default HeadComponent;
