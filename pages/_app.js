import { ThemeProvider } from "styled-components";
import "./../styles/global.scss";
import { theme } from "../src/theme/theme";
import Navigation from "../src/components/Navigation/Navigation";
import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence onExitComplete={true}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Audiophile</title>
        </Head>
        <Navigation />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AnimatePresence>
  );
}

export default MyApp;
