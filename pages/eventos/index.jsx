import Link from "next/link";
import Image from "next/image";
import style from "./style.module.css"
import { handleJSONfiles } from "../../functions/jsonHandler"
import Header from "../../components/Header";
import TextoEstilizado from "../../components/TextoEstilizado";

export function getStaticProps(){
    const eventos = handleJSONfiles('./public/posts/eventos');
    return {
    props: { eventos },
  };
}


export default function Eventos(props){
    let { eventos } = props;
    // console.log(eventos)
    return(
        
        <div className={style.container}>
            <Header home='0' end='/'/>
            <TextoEstilizado title='Nossos eventos'/>

            <div className={style.arrImages}>
            {eventos.map((i, index) => {
                return(
                    <div className={style.imageContent} key={index}>
                        <Link href={{pathname: `/eventos/${eventos[index].fileName}`}}>
                            <a>
                                <div className={style.image}>
                                    <Image src={eventos[index].image_source} layout={'fill'}  alt={`evento: ${eventos[index].alt}`}/>
                                </div>  
                                <p>{eventos[index].alt}</p>
                            </a>
                        </Link>
                    </div>
                )
            })}
            </div>
        </div>
    )
}