import style from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link';
import { getStaticProps } from '../../pages';
export default function Header(props){
    
    const links = ['sobre nós', 'parceiros', 'nossas ejs', 'eventos', 'mej', 'blog', 'contato'];

    return(
        <div className={style.header}>
            <div className={style.logo}>
                <Image src='/header/logo-header.png' layout={'fill'} />
            </div>
            <ul>
                {props.home == '1' ? 
                links.map( (i,index) => {
                    return(
                        <li key={index}>
                            <Link href={`#${i}`} >
                                <a className={style.animatedHover}>{i}</a>
                            </Link>
                        </li>  
                    )
                }) : <Link href={`${props.end}`}><a className={style.animatedHover} style={{marginRight: '-50%'}}>Voltar</a></Link>}
            </ul>
        </div>
    )
}