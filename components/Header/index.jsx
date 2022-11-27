import style from './styles.module.css'
import Image from 'next/image'
import Link from 'next/link';
export default function Header(){
    
    const links = ['sobre nós', 'parceiros', 'nossas ejs', 'eventos', 'mej', 'contato'];

    return(
        <div className={style.header}>
            <div className={style.logo}>
                <Image src='/header/logo-header.png' layout={'fill'} />
            </div>
            <nav>
                {links.map( i => {
                    return(
                        <>
                            <Link href={`#${i}`} >
                                <a>{i}</a>
                            </Link>
                        {i == links[links.length - 1] ? false : <span className={style.barra}>|</span>}
                        </>  
                    )
                })}
            </nav>
        </div>
    )
}