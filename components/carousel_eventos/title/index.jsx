import style from './title.module.css'

export default function Title(props)
{   

    return(
        <div className={style.title} style={{color: props.color ? props.color : '#A82A44'}}>
            {props.title ? props.title : 'Nossos eventos'}
        </div>
    )
}