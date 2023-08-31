import "@/styles/globals.scss";
import AppLayout from "@/components/layout";

export default function App({ Component, pageProps }) {
  return (
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  );
}
