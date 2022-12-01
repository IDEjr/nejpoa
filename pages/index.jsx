import Header from "../components/Header";
import MEJ from "../components/MEJ";
import EJs from '../components/Nossas_EJs';
import Footer from '../components/footer'
import Carousel_Eventos from '../components/carousel_eventos'
import { handleJSONfiles } from "../functions/jsonHandler";


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
    <>
      
      <Header/>
      <EJs/>
      <MEJ/>
      <Carousel_Eventos list={blogs} backgroundColor='#DDDDDD' title={'Blog'} image_heigth={27} right align={'flex-end'}/>        
      <Carousel_Eventos list={eventos} right left button/>
      <Carousel_Eventos list={parceiros} backgroundColor='white' color='#4C9ABB' image_heigth={8} title={'Nossos parceiros'} link={'/parceiros'} right left button/>   
      <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>
    </>
  );
}
