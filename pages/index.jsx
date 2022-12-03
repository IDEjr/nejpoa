
import Header from "../components/Header";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre"
import MEJ from "../components/MEJ";
import EJs from '../components/Nossas_EJs';
import Contatos from '../components/Contatos'
import Footer from '../components/footer'
import Carousel_Eventos from '../components/carousel_eventos'
import { handleJSONfiles } from "../functions/jsonHandler";
import JSXStyle from "styled-jsx/style";



export function getStaticProps() {
  const blogs = handleJSONfiles("./public/posts/blogs");
  const eventos = handleJSONfiles("./public/posts/eventos");
  const parceiros = handleJSONfiles("./public/posts/parceiros");

  return {
    props: { blogs, eventos, parceiros },
  };
}

export default function Home(props) {
  let { blogs, eventos, parceiros } = props;
  

  return (
    <div className="container">
      <style jsx>{`
            .container
            {
                width: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                overflow: hidden;
            }
        `}</style>
      <Header/>
      <Banner/>
      <Sobre/>
      <EJs/>
      <MEJ/>
      <Carousel_Eventos list={blogs} backgroundColor='#DDDDDD' title={'Blog'} image_heigth={27} right align={'flex-end'}/>        
      <Carousel_Eventos list={eventos} right left button/>
      <Carousel_Eventos list={parceiros} backgroundColor='white' color='#4C9ABB' image_heigth={8} title={'Nossos parceiros'} link={'/parceiros'} right left button/>   
      <Contatos/>
      <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>
    </div>
  );
}
