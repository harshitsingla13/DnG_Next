import { Layout } from "@/components/layout/Layout";
import { ThemeProvider } from "@mui/material/styles";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";
import theme from "@/theme/theme";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState({});

  return (
    <ThemeProvider theme={theme}>
      <Layout open={open} setOpen={setOpen} defaultValue={defaultValue}>
        <Component
          {...pageProps}
          open={open}
          setOpen={setOpen}
          setFormDefaultValue={setDefaultValue}
        />
        <Toaster duration={1500}/>
        <SpeedInsights />
      </Layout>
    </ThemeProvider>
  );
}
