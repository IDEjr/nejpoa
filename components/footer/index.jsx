import styles from "./css/content.module.css";
import boxStyles from "./css/boxes.module.css";
import textStyles from "./css/text.module.css";
import imageStyles from "./css/images.module.css";
import Image from "next/image";
import Link from "next/link";

export default function footer(props) {
  let corFundo = "#777777";
  let corLetra = "#FFFFFF";
  let url = [
    "/footer/logo_nej.svg",
    "/footer/Instagram.svg",
    "/footer/Icon.svg",
  ];

  if (props.theme == "light") {
    corLetra = "#4C9ABB";
    corFundo = "#FFFFFF";
    url[0] = "/footer/LogoBlue.png";
    url[1] = "/footer/InstagramBlue.png";
    url[2] = "/footer/EmailBlue.png";
  }

  return (
    <div style={{ backgroundColor: `${corFundo}` }} className={boxStyles.box}>
      <div className={boxStyles.box_content}>
        <div className={styles.logo}>
          <div className={imageStyles.image_logo}>
            <Image src={`${url[0]}`} layout={"fill"} />
          </div>
          <span
            style={{ color: `${corLetra}` }}
            className={textStyles.text_logo}
          >
            Conectando propósitos
          </span>
        </div>
        <div className={styles.info}>
          <a
            className={styles.link_insta}
            href="https://www.instagram.com/nejpoa/"
            target={"_blank"}
            rel="noreferrer"
          >
            <div
              className={
                props.theme == "light"
                  ? imageStyles.icon_insta_blue
                  : imageStyles.icon_insta
              }
            >
              <Image src={`${url[1]}`} layout={"fill"} />
            </div>
            <span
              style={{ color: `${corLetra}` }}
              className={textStyles.text_icons}
            >
              {props.instagram}
            </span>
          </a>
          <a className={styles.link_email} href="mailto: contato@nejpoa.com.br">
            <div
              className={
                props.theme == "light"
                  ? imageStyles.icon_email_blue
                  : imageStyles.icon_email
              }
            >
              <Image src={`${url[2]}`} layout={"fill"} />
            </div>
            <span
              style={{ color: `${corLetra}` }}
              className={textStyles.text_icons}
            >
              {props.email}
            </span>
          </a>
        </div>
      </div>
      <div className={boxStyles.box_CNPJ}>
        <span style={{ color: `${corLetra}` }} className={textStyles.text_CNPJ}>
          2022 | Núcleo das empresas Juniores de Porto Alegre CNPJ:
          30.782.475/0001-48
        </span>
      </div>
    </div>
  );
}
