import style from './style.module.css'
import Image from 'next/image'

export default function Descricao(props){
    return(
        <div className={style.container}>
            <div className={style.wrapper}>
                <p className={style.conteudo}>{props.content}</p>
                {props.children}
            </div>
        </div>
    )
}