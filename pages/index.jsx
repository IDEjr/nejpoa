
import styles from '../styles/Home.module.css'
import Script from "next/script";
import EJs from '../components/Nossas_EJs';

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {
    const nomes = handleJSONfiles('./public/posts/exemplo');
  
    return {
      props: { nomes },
    };
}

export default function Home(props) {

  let { nomes } = props;

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"/>
      <EJs/>
    </>
  )
}
