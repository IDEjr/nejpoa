import styles from '../styles/Home.module.css'

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {
    const nomes = handleJSONfiles('./public/posts');
  
    return {
      props: { nomes },
    };
}

export default function Home(props) {

  let { nomes } = props;

  return (
    <>
      <h1>{nomes[0].nome}</h1>
      <h1>{nomes[1].nome}</h1>      
    </>
  )
}
