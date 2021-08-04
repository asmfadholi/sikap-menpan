import { ThemeProvider } from "@emotion/react";
import { globalStyles } from "../assets/styles/globalStyles";
import { theme } from "../assets/styles/theme";

// components
import HeadComponent from "components/Head";

// contexts
import AuthProvider from "contexts/Auth";

//styles
// import "assets/styles/customizeAntdTheme.less";

function App({ Component, pageProps }) {
	const getLayout = Component.getLayout || ((page) => page);

	return (
		<>
			<HeadComponent />
			<ThemeProvider theme={theme}>
				{globalStyles}
				<AuthProvider>
					{getLayout(<Component {...pageProps} />)}
				</AuthProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
