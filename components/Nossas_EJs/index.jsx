import style from './ejs.module.css'
import EJ from './EJ'
import Link from 'next/link'
import Title from '../title'
export default function EJs() {
    const EJS = ['Negócios', 'Tecnologia', 'Agrária', 'Saúde', 'Engenharia', 'Humanas']
    return(
        <div id='nossas ejs' className={style.container}>
            <Title title='Conheça nossas EJs!'/>
            <div className={style.box_button}>
                <div className={EJS.length % 2 ? style.condicional : style.container__EJs }>
                {EJS.map((empresa, index) => {
                    return (
                        <EJ key={index} titulo = {empresa}/>
                    )
                })}
            </div>
                <Link href={'/nossas-ejs'}>
                     <button>Ver Todas</button>
                </Link>
            </div>
        </div>
    )
}