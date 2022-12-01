import style from './wait.module.css';

export default function Wait(props)
{
    let color

    if(props.color) color = props.color
    else color = 'black'

    return(
        <div className={style.spinner} style={{borderLeftColor: color}}/>
    );
}