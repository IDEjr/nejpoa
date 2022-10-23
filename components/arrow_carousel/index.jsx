import style from './arrow_carousel.module.css'
import { useState } from 'react';

export default function Arrow_Carousel(props)
{
    const [scale, setScale] = useState("");

    return(
        <div className={style.seta_default} 
             style={{transform:`rotate(${props.rot ? props.rot : '45'}deg) ${scale}`, borderColor: props.color ? props.color:'black'}} 
             onMouseOver={()=>setScale("scale(1.2)")} 
             onMouseLeave={()=>setScale("")} 
             onClick={() => {props.fun ? (props.fun)() : none }}/>
    )
    

}