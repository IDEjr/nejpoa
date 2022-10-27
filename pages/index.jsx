import Box from './../components/box';
import Carousel_Eventos from '../components/carousel_eventos';

import styles from '../styles/Home.module.css'
import Script from "next/script";

import { handleJSONfiles } from '../functions/jsonHandler';

export function getStaticProps() {
    const nomes = handleJSONfiles('./public/posts/exemplo');
    const eventos = handleJSONfiles('./public/posts/eventos');
  
    return {
      props: { nomes, eventos },
    };
}

export default function Home(props) {

  let { nomes, eventos } = props;


  return (
    <>      
      <Box>
        {nomes.map( ({nome}, index) => <h1 key={index}>{nome}</h1>)} 
        <Carousel_Eventos list={eventos} /*color='#4C9ABB' image_heigth={10} title={'Nossos parceiros'}*//>
      </Box>   
    </>
  )
}
