import { useEffect, useState, useCallback } from "react";
import { ThemeProvider } from "styled-components";
import "./../styles/global.scss";
import { theme } from "../src/theme/theme";
import { AnimatePresence } from "framer-motion";

import NavigationStatic from "../src/components/Navigation/NavigationStatic";
import Head from "next/head";
import Footer from "../src/components/Footer/Footer";
import NavigationFixed from "../src/components/Navigation/NavigationFixed";

let isInitial = true;

function MyApp({ Component, pageProps, router }) {
  const [y, setY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // checking if user is scrolling up or down
  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > 500 && y > window.scrollY) {
        // if user scrolls up, show navigation, otherwise don't
        setIsVisible(true);
      } else if (y < 500 || y < window.scrollY) {
        setIsVisible(false);
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (isInitial) isInitial = false; // when page initialy loads set isInitial variable to the false value
    setIsVisible(false);
    setY(0);
  }, [router.route]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Audiophile</title>
      </Head>
      <NavigationStatic />
      <NavigationFixed isVisible={isVisible} />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Component {...pageProps} key={router.route} isInitial={isInitial} />
      </AnimatePresence>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
