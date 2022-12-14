import { useRouter } from "next/router"
import style from './eventos.module.css'
import Header from "../../components/Header"
import Image from "next/image"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"

export default function Anom(){
    const router = useRouter()
    const {eventos} = router.query;
    if(!eventos) return <></>;
    
    const element = require(`../../public/posts/eventos/${eventos}`)

    return(
       
        <div className={style.container}>
          <Header home='1' end='/'/>

          <div className={style.title}>
            <h1>{element.title}</h1>
            <span className={style.barra}/>
          </div>

             <div className={style.sub_container}>
              <div className={style.image}>
                <Image src={element.image_event} layout={'fill'} priority/>
              </div>
                <div className={style.content}>
                  <span className={style.barra}/>
                  {element.content != "" ?
                  <p><ReactMarkdown>{element.content}</ReactMarkdown></p>
                  : <p className={style.condicional} style={{fontSize:"10vw"}}>Em breve...</p>}
                </div>
            </div>
        </div>
    )
}