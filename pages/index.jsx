import Script from "next/script";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Sobre from "../components/Sobre";
import MEJ from "../components/MEJ";
import { handleJSONfiles } from "../functions/jsonHandler";

export function getStaticProps() {
  const nomes = handleJSONfiles("./public/posts/exemplo");

  return {
    props: { nomes },
  };
}

export default function Home(props) {
  let { nomes } = props;
  

  return (
    <>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Header/>
      <Banner/>
      <Sobre/>
      <MEJ/>
    

    </>
  );
}
