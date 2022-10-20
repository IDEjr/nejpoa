import styles from './footer.module.css'
import Image from 'next/image'

export default function footer(props)
{

    return(

        <div className={styles.box}>
            <div className={styles.logo}>
                <Image src={'/footer/logo.png'} width={'200vw'} height={'75vh'}/>
            </div>
            <div className={styles.info}>
                <Image src={'/footer/Instagram.png'} width={'20%'} height={'20%'}/>
                <span className={styles.text}>@nejpoa</span>
            </div>
            <div className={styles.info}>
                <Image src={'/footer/Instagram.png'} width={'20%'} height={'20%'}/>
                <span className={styles.text}>@nejpoa</span>
            </div>
        </div>
    )
}

