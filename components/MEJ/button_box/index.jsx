import style from './style.module.css'
import Image from 'next/image';
export default function ButtonBox(props){
    return(
        <div className={style.button_box}>
            <div className={style.img_fejers}>
                <Image src={props.img} layout={'fill'}/>
            </div>
            <button
            onClick={(e) => {
                e.preventDefault();
                window.open(props.link, "_blank");
            }}>
            Saiba mais
            </button>
        
        </div>
     )
}