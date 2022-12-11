import styles from './css/content.module.css'
import boxStyles from './css/boxes.module.css'
import textStyles from './css/text.module.css'
import imageStyles from './css/images.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function footer({instagram, email})
{
    
    return (
      <div className={boxStyles.box}>
        <div className={boxStyles.box_content}>
          <div className={styles.logo}>
            <div className={imageStyles.image_logo}>
              <Image src={"/footer/logo_nej.svg"} layout={"fill"} />
            </div>
            <span className={textStyles.text_logo}>Conectando propósitos</span>
          </div>
          <div className={styles.info}>
            <a
              className={styles.link_insta}
              href="https://www.instagram.com/nejpoa/" 
              target={'_blank'}
              rel={'noopener'}
            >
              <div className={imageStyles.icon_insta}>
                <Image src={"/footer/Instagram.svg"} layout={"fill"} />
              </div>
              <span className={textStyles.text_icons}>{instagram}</span>
            </a>
            <a
              className={styles.link_email}
              href="mailto: contato@nejpoa.com.br"
            >
              <div className={imageStyles.icon_email}>
                <Image src={"/footer/Icon.svg"} layout={"fill"} />
              </div>
              <span className={textStyles.text_icons}>{email}</span>
            </a>
          </div>
        </div>
        <div className={boxStyles.box_CNPJ}>
          <span className={textStyles.text_CNPJ}>
            2022 | Núcleo das empresas Juniores de Porto Alegre CNPJ:
            30.782.475/0001-48
          </span>
        </div>
      </div>
    );
}

