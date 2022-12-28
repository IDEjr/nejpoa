import { handleJSONfiles } from "../../functions/jsonHandler";
import Header from "../../components/Header";
import TextoEstilizado from "../../components/TextoEstilizado";
import style from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

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
      <TextoEstilizado title="Nossos conteúdos" />
      <div className={style.arrImages}>
        {conteudo.map((i, index) => {
          return (
            <Link href={{pathname: `/blog/${conteudo[index].fileName}`}}>
              <div className={style.blog_component}>
                <div className={style.image}>
                  <Image src={conteudo[index].image_source} layout={"fill"} />
                </div>
                <span>{conteudo[index].title}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
