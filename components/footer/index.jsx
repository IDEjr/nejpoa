import styles from './footer.module.css'
import Image from 'next/image'

export default function footer({instagram, email})
{
    
    return(

        <div className={styles.box}>
                <div className={styles.box_content}>
                   <div className={styles.logo}>
                    <div className={styles.image_logo}>
                        <Image src={'/footer/logo_nej.svg'} layout= {'fill'}/>
                    </div>
                    <span className={styles.text_logo}>Conectando propósitos</span>
                   </div>
                <div className={styles.info}>

                    <Image src={'/footer/Instagram.svg'} width={'25%'} height={'25%'}/>
                    <span className={styles.text_icons}>{instagram}</span>
                    <Image src={'/footer/Icon.svg'} width={'25%'} height={'25%'}/>
                    <span className={styles.text_icons}>{email}</span>
                </div>  
            </div> 
            <div className={styles.box_CNPJ}>
                <span className={styles.text_CNPJ}>2022 | Núcleo das empresas Juniores de Porto Alegre CNPJ: 30.782.475/0001-48</span>
            </div>
        </div>
    )
}

