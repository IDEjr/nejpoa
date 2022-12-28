import style from './style.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function BlogTemplate(props){
    return (
        <Link href={'/blog'}>
            <div className={style.container} >
                <div className={style.subcontainer}>
                    <div className={style.img}>
                        <Image alt= {`Imagem direcional para o blog sobre:' ${props.titulo}`}
                            src={props.img} 
                            layout={'fill'} 
                            />
                    </div>
                    <h2>{props.title}</h2>
                    <span className={style.subtitle}>{props.subtitle}</span>
                    <div className={style.data_component}>
                    </div>
        
                        <span className={style.data}>Publicado {props.date}</span>
                </div>
            </div>
        </Link>
    )
}