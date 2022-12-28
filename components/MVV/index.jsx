import React, { useState } from 'react';
import style from './styles.module.css'
import OurMission from './OurMission';
import MVVBox from './MVVBox';
import OurRules from './OurRules';

export default function MVV(){
    const [selectedMvv, setSelectedMvv] = useState("missao");
    const options = [
        {value: "missao", text: "Missão"}, 
        {value: "valores", text: "Valores"},  
        {value: "regras", text: "Regras Não Negociáveis"}, 
    ]

    const ourValues = [
        {img:"", title: "Elã", description: "Somos impulso. Um movimento impetuoso, afetuoso e expansivo. Temos entusiasmo criador. Agimos com emoção, calor e vivacidade. Somos inspiração."},
        {img:"", title: "Manada", description: "Reconhecemos que a união faz a força! Trabalhamos em um espaço seguro, somos transparentes, vulneráveis e nos damos feedbacks sinceros. Somos acolhedores e cuidamos uns dos outros, nos aplaudimos, pedimos ajuda e compartilhamos nossas vitórias e derrotas. Somos timão."},
        {img:"", title: "Visão Sistêmica", description: "Somos impulso. Um movimento impetuoso, afetuoso e expansivo. Temos entusiasmo criador. Agimos com emoção, calor e vivacidade. Somos inspiração."},
        {img:"", title: "Liderar pelo exemplo", description: "Somos quem queremos ver. Buscamos constantemente ser reflexo e referência pra nossa rede. Tomamos a frente quando necessário, construindo e sendo responsáveis pelos nossos resultados."},
    ]

    const ourRules = [
        {img:"", title: "Trabalhamos pelos melhores resultados", description: "Nossa régua é alta. Buscamos compreender o que fazemos e entregar o melhor para a nossa rede, queremos ser especialistas, inovadores e ousados."},
        {img:"", title: "Aprendemos com a nossa história", description: "Reconhecemos que outros vieram antes de nós e que estamos aqui porque nossa historia está sendo escrita faz tempo. Compreendemos nosso passado enquanto organização e tomamos decisões baseadas no que já vivemos. Seguimos escrevendo nossa história com coerência e preparamos os próximos atores da organização."},
        {img:"", title: "Buscamos ter equilibrio", description: "Compreendemos nossos desafios e limites, e damos nosso melhor, temos a consciencia de que precisamos cuidar do nosso bem-estar e do da rede para chegar aonde queremos."},
        {img:"", title: "Não deixamos a peteca cair", description: "Trabalhamos e acreditamos desde o início. Todos somos responsáveis pelo alto impacto da nossa rede, lutamos por isso até o final e ninguém fica pra trás."},
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
                    selectedMvv === "valores" ? <MVVBox title="Nosso valores" json={ourValues}/>
                    :
                    /*sobra o outro*/           <MVVBox title="Nossos RNNS" json={ourRules}/>
                }
            </div> 
        </div>
    )
}
