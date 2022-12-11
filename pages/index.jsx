import BlogTemplate from "../components/Carrousel/BlogTemplate";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre"
import MEJ from "../components/MEJ";
import EJs from '../components/Nossas_EJs';
import Contatos from '../components/Contatos'
import Footer from '../components/footer'
import { handleJSONfiles } from "../functions/jsonHandler";
import JSXStyle from "styled-jsx/style";
import Events from "../components/Events"
import Partners from "../components/Partners"
import Blog from "../components/Blog"

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
      <Header home='1'/>
      <Banner/>
      <Sobre/>
      <Partners list={parceiros}/>     
      <EJs/>
      <Blog list={blogs}/>  
      <MEJ/>
      <Events list={eventos}/>
      <Contatos/>
      <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>
      
    </div>
  );
}
