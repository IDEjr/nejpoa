import style from './style.module.css'
export default function TextoEstilizado(props){
    return (
        <div className={style.title}>
                <h1>{props.title}</h1>
                <span/>
        </div>
    )
}