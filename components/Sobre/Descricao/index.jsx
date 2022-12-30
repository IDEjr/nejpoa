import style from './style.module.css'
import Image from 'next/image'

export default function Descricao(props){
    return(
        <div className={style.container}>
            <div className={style.imgContainer}>
                <img className={style.img} src={"/Logo_nej_poa.png"} />
            </div>
            <p className={style.conteudo}>{props.content}</p>
        </div>
    )
}