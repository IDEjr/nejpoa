import style from './styles.module.css'

export default function MVV(){
    return (
        <div className={style.container}>
            <div className={style.optionsContainer}>
                <button className={style.option}>
                    Missão
                </button>
                <button className={style.option}>
                    Valores
                </button>  
                <button className={style.option}>
                    Regras<br/>
                    Não<br/>
                    Negociáveis
                </button>
            </div> 
            <div className={style.mvvContainer}>
                descricoes
            </div> 
        </div>
    )
}
