import style from './style.module.css'
import Image from 'next/image'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
export default function Descricao(props){
    return(
        <div className={style.container}>
            <div style={
                {
                    position: "relative",
                    width: "20vw",
                    heigth: "50vw",
                   
                }
            }>
                <Image src='/sobre/quadrado-estilizado.png' layout={'fill'}/>
            </div>
            <p>{props.content}</p>
        </div>
    )
}