import Link from "next/link";
import { handleJSONfiles } from "../../functions/jsonHandler"

export function getStaticProps(){
    const eventos = handleJSONfiles('./public/posts/eventos');
    return {
    props: { eventos },
  };
}

export default function Eventos(props){
    let { eventos } = props;
    // console.log(eventos[1].fileName)
    return(
        <>
            <Link href={{pathname: `/eventos/${eventos[1].fileName}`}}>
                <a>Eventos</a>
            </Link>    
        </>
    )
}