import style from './style.module.css'
export default function TextBox(props){
    return(
        <div className={style.text_box}>
            <h1>{props.titulo}</h1>
            <span>{props.conteudo}</span>
        </div>
    )
}