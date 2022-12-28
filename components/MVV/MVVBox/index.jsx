import style from "../styles.module.css"
export default function OurValues({json, title}){
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
                                <div className={style.img}></div>
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
