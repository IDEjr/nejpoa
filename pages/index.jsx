import BlogTemplate from "../components/Carrousel/BlogTemplate";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";
import MEJ from "../components/MEJ";
import EJs from "../components/Nossas_EJs";
import Contatos from "../components/Contatos";
import Footer from "../components/footer";
import { handleJSONfiles } from "../functions/jsonHandler";
import JSXStyle from "styled-jsx/style";
import Events from "../components/Events";
import Partners from "../components/Partners";
import Blog from "../components/Blog";
import MVV from "../components/MVV";
import Head from "next/head";
export function getStaticProps() {
  const blogs = handleJSONfiles("./public/posts/blogs");
  const eventos = handleJSONfiles("./public/posts/eventos");
  const parceiros = handleJSONfiles("./public/posts/parceiros");
  const dadosSobre = handleJSONfiles("./public/posts/dadosSobre");

  return {
    props: { blogs, eventos, parceiros, dadosSobre },
  };
}

export default function Home(props) {
  let { blogs, eventos, parceiros, dadosSobre } = props;

  return (
    <>
      <Head>
        <title>NEJPOA</title>
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/favicon/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/favicon/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
      </Head>

      <div className="container">
        <style jsx>{`
          .container {
            width: 100%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
        `}</style>
        <Header home="1" />
        <Banner />
        <Sobre dados={dadosSobre} />
        <MVV />
        <Partners list={parceiros} />
        <EJs />
        <Blog list={blogs} />
        <MEJ />
        <Events list={eventos} />
        <Contatos />
        <Footer instagram="@nejpoa" email="contato@nejpoa.com.br" />
      </div>
    </>
  );
}
