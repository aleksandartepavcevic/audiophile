import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import "./../styles/global.scss";
import { theme } from "../src/theme/theme";
import { AnimatePresence } from "framer-motion";

import Navigation from "../src/components/Navigation/Navigation";
import Head from "next/head";
import Footer from "../src/components/Footer/Footer";

let isInitial = true;

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    if (isInitial) isInitial = false;
    window.scrollTo(0, 0);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Audiophile</title>
      </Head>
      <Navigation />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} isInitial={isInitial} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
