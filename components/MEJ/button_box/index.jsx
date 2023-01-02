import style from './style.module.css'
import Image from 'next/image';
export default function ButtonBox(props){
    return(
        <div className={style.button_box}>
            <div className={style.img_fejers}>
                <Image src={props.img} layout={'fill'}/>
            </div>
            <a href={props.link} target='_blank' rel="noreferrer"><button>
            Saiba mais
            </button></a>
        
        </div>
     )
}