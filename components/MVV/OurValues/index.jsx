import style from "../styles.module.css"
export default function OurValues(){
    const json = [
        {img:"", title: "Trabalhamos pelos melhores resultados", description: "Nossa régua é alta. Buscamos compreender o que fazemos e entregar o melhor para a nossa rede, queremos ser especialistas, inovadores e ousados."},
        {img:"", title: "Aprendemos com a nossa história", description: "Reconhecemos que outros vieram antes de nós e que estamos aqui porque nossa historia está sendo escrita faz tempo. Compreendemos nosso passado enquanto organização e tomamos decisões baseadas no que já vivemos. Seguimos escrevendo nossa história com coerência e preparamos os próximos atores da organização."},
        {img:"", title: "Buscamos ter equilibrio", description: "Compreendemos nossos desafios e limites, e damos nosso melhor, temos a consciencia de que precisamos cuidar do nosso bem-estar e do da rede para chegar aonde queremos."},
        {img:"", title: "Não deixamos a peteca cair", description: "Trabalhamos e acreditamos desde o início. Todos somos responsáveis pelo alto impacto da nossa rede, lutamos por isso até o final e ninguém fica pra trás."},
    ]

    return (
        <div className={style.mvv}>
            <div className={style.title}>
                Nossos Valores
            </div>
            <div className={style.content}>
                {
                    json.map((item, i)=>{
                        return(
                            <div key={i} className={`${style.item} ${i % 2 === 0 ? style["left"]: style["right"]}`}>
                                <div className={style.img}></div>
                                <div className={style.text}>
                                    <div className={style.title}>{item.title}</div>
                                    <div className={style.description}>{item.description}</div>
                                </div>
                            </div>
                        )
                    })
                }            
            </div> 
        </div>
    )
}
