import style from './button.module.css'
import Link from 'next/link'

export default function Button(props)
{
    return(
        <Link href={'/eventos'}>
            <a className={style.button} style={{backgroundColor: props.color ? props.color : '#A82A44' , boxShadow: `0px 10px 15px ${props.color ? props.color : '#A82A44'}`}}>
                {props.title ? props.title : "VER TODOS"}
            </a>
        </Link>  
    
    )
}
