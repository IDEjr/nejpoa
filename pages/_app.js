import '../styles/globals.css'
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  return <Component {...pageProps} />
}

export default MyApp
