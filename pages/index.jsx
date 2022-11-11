import Box from './../components/box';
import Contatos from '../components/Contatos'


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
      <Box>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)}
        <Contatos/>
        
      </Box>         
      
    </>
  )
}
