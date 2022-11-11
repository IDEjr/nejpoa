import style from './ej.module.css'
export default function EJ(props){
    return(
        <div className={style.box_ej}>
            <h2>{props.titulo}</h2>
        </div>
    )
}