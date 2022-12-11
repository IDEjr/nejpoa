import { useRouter } from "next/router"
import style from './eventos.module.css'
import Header from "../../components/Header"
import Image from "next/image"
export default function Anom(){
    const router = useRouter()
    console.log(router)
    const {eventos} = router.query;
    if(!eventos) return <></>;
    
    const element = require(`../../public/posts/eventos/${eventos}`)

    return(
        <div className={style.container}>
          <Header home='0' end='/eventos'/>

          <div className={style.title}>
            <h1>{element.title}</h1>
            <span className={style.barra}/>
          </div>

             <div className={style.sub_container}>
                <Image width={"500px"} height={"400px"} src={element.image_event}/>
                <div className={style.content}>
                  <span className={style.barra}/>
                  <p>{element.content}</p>
                </div>
            </div>
        </div>
    )
}