import Image from "next/image"
import style from "../styles.module.css"
export default function MVVBox({json, title}){
    return (
        <div className={style.mvv}>
            <div className={style.title}>
                {title}
            </div>
            <div className={style.content}>
                {
                    json.map((item, i)=>{
                        return(
                            <div key={i} className={`${style.item} ${i % 2 === 0 ? style["left"]: style["right"]}`}>
                                <Image alt="Imagem ilustrativa" height={120} width={120} src={item.img}></Image>
                                <div className={style.text}>
                                    <div className={style.title}>{item.title}</div>
                                    <div className={style.description}>{item.description}</div>
                                </div>
                            </div>
                        )
                    })
                }            
            </div> 
        </div>
    )
}
