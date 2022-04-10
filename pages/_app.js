import "../styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Layout } from "../components";
import "@fontsource/maven-pro/400.css";
import "@fontsource/maven-pro/500.css";
import "@fontsource/maven-pro/600.css";
import "@fontsource/maven-pro/700.css";
import "@fontsource/maven-pro";

const theme = extendTheme({
  fonts: {
    heading: "Maven Pro, sans-serif",
    body: "Maven Pro, sans-serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
