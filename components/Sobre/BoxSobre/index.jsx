import styles from './styles.module.css'
import { useState } from 'react';
import { bodyStreamToNodeStream } from 'next/dist/server/body-streams';
export default function BoxSobre(props){
    //funcao so aceita vermelho ou azul como parametro para cor
    let textStyle;
    const [counter, setCounter] = useState(0);
    props.cor == 'vermelho' ? textStyle= styles.vermelho  
    : 
    props.cor == "azul" ? textStyle = styles.azul 
    :
    props.cor == "branco" ? textStyle = styles.branco : "";
    
    console.log(props.special)
    return(
            <div className={`${styles.container} ${props.special ? styles["special"] : ""}`}>
                <span className={textStyle} style={{fontSize: "clamp(4rem, 6vw, 5rem)"}}>{props.titulo}</span>
                <span className={textStyle}>{props.conteudo}</span>
            </div>
    )
}