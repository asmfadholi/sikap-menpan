import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";
import idID from "antd/lib/locale/id_ID";

// components
import HeadComponent from "components/Head";

// contexts
import AuthProvider from "contexts/Auth";
import { ConfigProvider } from "antd";

//styles
// import "assets/styles/customizeAntdTheme.less";

function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<>
			<HeadComponent />
			<ConfigProvider locale={idID}>
				<ThemeProvider theme={theme}>
					{globalStyles}
					<AuthProvider>
						{getLayout(<Component {...pageProps} />)}
					</AuthProvider>
				</ThemeProvider>
			</ConfigProvider>
		</>
	);
}

export default App;
