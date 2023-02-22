import type { AppProps } from "next/app";
import { ChakraProvider, createLocalStorageManager } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import '@/styles/fonts/stylesheet.css'

function MyApp({ Component, pageProps }: AppProps) {
	const manager = createLocalStorageManager("chunimai-theme-mode2");

	return (
		<ChakraProvider theme={theme} colorModeManager={manager}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
