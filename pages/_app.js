import "@/styles/globals.css";
import "@/styles/rt-plugins.css";
import "@/styles/app.css";

import Script from "next/script";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />;
      <Script src="../js/popper.min.js" />
      <Script src="../js/jquery-3.6.0.min.js" />
      <Script src="../js/rt-plugins.js" />
      <Script src="https://unpkg.com/phosphor-icons" />
      <Script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js" />
      <Script src="../js/app.js" />
    </>
  );
}
