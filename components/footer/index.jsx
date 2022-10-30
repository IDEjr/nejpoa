import styles from './footer.module.css'
import Image from 'next/image'

export default function footer({instagram, email})
{
    
    return(

        <div className={styles.box}>
                <div className={styles.box_content}>
                   <div className={styles.logo}>
                    <Image src={'/footer/logo_nej.svg'} width={"200vw"} height={"75vh"}/>
                    <span className={styles.text_logo}>Conectando propósitos</span>
                   </div>
                <div className={styles.info}>
                    <Image src={'/footer/Instagram.svg'} width={'20%'} height={'20%'}/>
                    <span className={styles.text_icons}>{instagram}</span>
                </div>
                <div className={styles.info}>
                    <Image src={'/footer/Icon.svg'} width={'20%'} height={'20%'}/>
                    <span className={styles.text_icons}>{email}</span>
                </div>  
            </div> 
            <div className={styles.box_CNPJ}>
                <span className={styles.text_CNPJ}>2022 | Núcleo das empresas Juniores de Porto Alegre CNPJ: 30.782.475/0001-48</span>
            </div>
        </div>
    )
}

