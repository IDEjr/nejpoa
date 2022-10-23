import styles from './footer.module.css'
import Image from 'next/image'

export default function footer({instagram, email})
{
    
    return(

        <div className={styles.box}>
            <div className={styles.logo}>
                <Image src={'/footer/logo_nej.svg'} width={'200vw'} height={'75vh'}/>
            </div>
            <div className={styles.info}>
                <Image src={'/footer/Instagram.svg'} width={'20%'} height={'20%'}/>
                <span className={styles.text}>{instagram}</span>
            </div>
            <div className={styles.info}>
                <Image src={'/footer/Icon.svg'} width={'20%'} height={'20%'}/>
                <span className={styles.text}>{email}</span>
            </div>
        </div>
    )
}

