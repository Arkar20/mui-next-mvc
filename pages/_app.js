import Head from "next/head";
import ReduxStore from "src/rstore";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/config/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <ReduxStore Component={Component} pageProps={pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
