import { handleJSONfiles } from "../../functions/jsonHandler";
import Header from "../../components/Header";
import StyledTitle from "../../components/styleTitle";
import style from "./style.module.css";

import Image from "next/image";


export function getStaticProps() {
  const conteudo = handleJSONfiles("./public/posts/blogs");
  return {
    props: { conteudo },
  };
}

export default function BlogPage(props) {
  let { conteudo } = props;
  console.log(conteudo);
  return (
    <div className={style.container}>
      <Header home="0" end="/" />
      <StyledTitle title="Nossos conteúdos" />
      <div className={style.arrImages}>
        {conteudo.map((i, index) => {
          return (
            <div className={style.blog_component}>
              <div className={style.image}>
                <Image src={conteudo[index].image_source} layout={"fill"} />
              </div>
              <span>{conteudo[index].title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
