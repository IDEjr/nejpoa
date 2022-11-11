import style from './ejs.module.css'
import EJ from './EJ'
export default function EJs() {
    const EJS = ['Negócios', 'Tecnologia', 'Agrária', 'Saúde', 'Engenharia', 'Humanas']
    return(
        <div className={style.container}>
            <span>Conheça nossas EJs!</span>
            <div className={style.box_button}>
                <div className={style.container__EJs}>
                {EJS.map((empresa) => {
                    return (
                        <EJ titulo = {empresa}/>
                    )
                })}
            </div>
            <button>Ver Todas</button>
            </div>
        </div>
    )
}