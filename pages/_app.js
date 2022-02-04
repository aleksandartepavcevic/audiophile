import { ThemeProvider } from "styled-components";
import "./../styles/global.scss";
import { theme } from "../src/theme/theme";
import Navigation from "../src/components/Navigation/Navigation";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
