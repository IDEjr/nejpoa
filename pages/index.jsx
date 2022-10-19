import Script from "next/script";

import Box from "./../components/box";

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
      <Box>
        {nomes.map(({ nome }, index) => (
          <h1 key={index}>{nome}</h1>
        ))}
      </Box>
    </>
  );
}
