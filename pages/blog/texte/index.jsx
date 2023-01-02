
import Blog from "../../../components/Blog";
import { handleJSONfiles } from "../../../functions/jsonHandler";
export function getStaticProps() {
    const blog = handleJSONfiles("./public/posts/blogs");
    return {
      props: { blog },
    };
  }



export default function Teste(props){
    let {conteudo} = props;
    console.log(conteudo);
    return(
        <>
        
        </>
    )
}