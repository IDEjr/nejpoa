import style from './ejs.module.css'
import EJ from './EJ'
import Link from 'next/link'
export default function EJs() {
    const EJS = ['Negócios', 'Tecnologia', 'Agrária', 'Saúde', 'Engenharia', 'Humanas']
    return(
        <div className={style.container}>
            <span>Conheça nossas EJs!</span>
            <div className={style.box_button}>
                <div className={EJS.length % 2 ? style.condicional : style.container__EJs }>
                {EJS.map((empresa) => {
                    return (
                        <EJ titulo = {empresa}/>
                    )
                })}
            </div>
                <Link href={'#'}>
                     <button>Ver Todas</button>
                </Link>
            </div>
        </div>
    )
}