import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import "@/styles/globals.css";
import theme from "@/theme/theme";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
