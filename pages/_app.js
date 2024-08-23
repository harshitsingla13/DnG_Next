import { Layout } from "@/components/layout/Layout";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/react';
import "@/styles/globals.css";
import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [defaultValue, setDefaultValue] = useState({});

  return (
    <Layout open={open} setOpen={setOpen} defaultValue={defaultValue}>
      <Component
        {...pageProps}
        open={open}
        setOpen={setOpen}
        setFormDefaultValue={setDefaultValue}
      />
      <Toaster duration={1500} />
      <SpeedInsights />
      <Analytics />
    </Layout>
  );
}
