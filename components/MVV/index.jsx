import React, { useState } from 'react';
import style from './styles.module.css'
import OurMission from './OurMission';
import OurValues from './OurValues';
import OurRules from './OurRules';

export default function MVV(){
    const [selectedMvv, setSelectedMvv] = useState("missao");
    const options = [
        {value: "missao", text: "Missão"}, 
        {value: "valores", text: "Valores"},  
        {value: "regras", text: "Regras Não Negociáveis"}, 
    ]
    return (
        <div className={style.container}>
            <div className={style.optionsContainer}>
                {
                    options.map((item, i)=>{
                        return(
                            <button key={i} onClick={()=>{setSelectedMvv(item.value)}} className={`${style.option} ${selectedMvv === item.value ? style["selected"] : ""}`}>
                                {item.text}
                            </button>
                        )
                    })
                }
            </div> 
            <div className={`${style.mvvContainer}`}>
                <div className={`${style.indicator} ${style[selectedMvv]}`}>
                    ●
                </div>
                {
                    selectedMvv === "missao" ?  <OurMission/> 
                    :
                    selectedMvv === "valores" ? <OurValues/>
                    :
                    /*sobra o outro*/           <OurRules/>
                }
            </div> 
        </div>
    )
}
