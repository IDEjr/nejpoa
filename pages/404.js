import style from '../styles/404.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function NotFound(){
    return(
        <div className={style.notFound}>
            <div className={style.container}>
                
                    <Image  width={'300px'} height={'100px'} src={'/404/nejlogo.png'}/>
                    <Image src={'/404/Logo.png'} width={'600px'} height={'450px'} priority/>
                    <Image  width={'250px'} height={'150px'} src={'/404/logoide.png'}/>
              
            </div>

            <Link href='/'><button className={style.button}>Voltar para Home</button></Link>
        </div>
    )
}