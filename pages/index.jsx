import Box from './../components/box';
import Carousel_Eventos from '../components/carousel_eventos';

import styles from '../styles/Home.module.css'
import Script from "next/script";

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {
    const nomes = handleJSONfiles('./public/posts/exemplo');
    const eventos = handleJSONfiles('./public/posts/eventos');
    const parceiros = handleJSONfiles('./public/posts/parceiros');
  
    return {
      props: { nomes, eventos, parceiros },
    };
}

export default function Home(props) {

  let { nomes, eventos, parceiros } = props;


  return (
    <>      
      <Box>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)} 
        <Carousel_Eventos list={eventos}/>
        <Carousel_Eventos list={parceiros} backgroundColor='white' color='#4C9ABB' image_heigth={8} title={'Nossos parceiros'} link={'/parceiros'}/>        
      </Box>   
    </>
  )
}
