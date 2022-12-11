import style from './style.module.css'
import Image from 'next/image'
export default function BlogTemplate(props){
    return (
        <div className={style.container}>
            <div className={style.img}>
                <Image alt= {`Imagem direcional para o blog sobre:' ${props.titulo}`}
                    src={props.img} 
                    layout={'fill'} 
                    />
            </div>
            <h2>{props.title}</h2>
            <span>{props.subtitle}</span>

        </div>
    )
}