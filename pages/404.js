import style from '../styles/404.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Title from '../components/title'
import Footer from '../components/footer'
export default function NotFound(){
    return(
        <div className={style.notFound}>
            <div className={style.container} >
                    <div className={style.titulo}><Title title = 'Sua busca atingiu níveis estratosféricos'/></div>
                    <Image style={{marginTop: "-8%"}} src={'/404/Logo.png'} width={'600px'} height={'450px'} priority/>
              
            </div>

            <Link  href='/'><button className={style.button}>Voltar para Home</button></Link>
         
        </div>
    )
}