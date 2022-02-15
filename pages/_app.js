import { ThemeProvider } from "styled-components";
import "./../styles/global.scss";
import { theme } from "../src/theme/theme";
import Navigation from "../src/components/Navigation/Navigation";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Audiophile</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
