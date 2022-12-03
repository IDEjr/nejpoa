import styles from './styles.module.css'
import Image from 'next/image'
export default function Banner(){
    return(
        <div className={styles.container}>
            <Image src = '/banner.png' className={styles.img} layout={'fill'}/>
            <span>Representar, engajar e fortalecer a rede fomentando seu desenvolvimento sustentável</span>
        </div>
    )
}