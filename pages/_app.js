import '../styles/globals.css'
import Script from "next/script";
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
  return (
   <>
      <Head>
      </Head>
      <Component {...pageProps} />
    </>
  
  )
}

export default MyApp
