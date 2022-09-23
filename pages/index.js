import styles from '../styles/Home.module.css'
import Script from "next/script";

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
      <h1>{nomes[0].nome}</h1>
      <h1>{nomes[1].nome}</h1>      
    </>
  )
}
