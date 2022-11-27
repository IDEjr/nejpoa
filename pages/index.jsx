import Script from "next/script";
import Header from "../components/Header";
import MEJ from "../components/MEJ";
import Footer from '../components/footer'
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
      <MEJ/>
      <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br"/>

    </>
  );
}
