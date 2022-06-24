import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Mode from "../components/Mode";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Layout>
  );
}

export default MyApp;
