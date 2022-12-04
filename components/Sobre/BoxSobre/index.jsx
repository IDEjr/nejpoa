import styles from './styles.module.css'
import AnimatedNumber from 'react-animated-number/build/AnimatedNumber';
import { useState } from 'react';
import { bodyStreamToNodeStream } from 'next/dist/server/body-streams';
export default function BoxSobre(props){
    //funcao so aceita vermelho ou azul como parametro para cor
    let textStyle;
    const [counter, setCounter] = useState(0);
    props.cor == 'vermelho' ? textStyle= styles.vermelho : textStyle = styles.azul;

    return(

            <div className={styles.container}>
                <AnimatedNumber
                    value={counter + parseFloat(props.titulo)}s
                    className={textStyle}
                    formatValue={n=> n.toFixed(0)}
                    style={
                        {
                            fontSize: '90px',
                            
                        }
                    }
                    duration={2500}
                />
                <span className={textStyle}>{props.conteudo}</span>
            </div>
        
    )
}