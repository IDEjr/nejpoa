import style from './ej.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function EJ(props){
    let img_source = ['line-chart-unscreen', 'rate-unscreen', 'corn-unscreen', 'lungs-unscreen', 'protactor-unscreen', 'brain-unscreen']

//    Na necessidade de adicionar mais elementos:
//    A posição do nome da imagem que tu quer tem que estar condizente com a o nome da box da Ej
//    ex line-chart-unscreen [0] é a imagem representativa da posição [0] do array EJS (arquivo index.jsx) e 
//    assim por diante

    return(
        <Link href={{
            pathname: '/nossas-ejs', 
            query: {tag: props.titulo}
        }}>
            <div className={style.box_ej}>
                <h2>{props.titulo}</h2>
                <Image src={`/NossasEjs/${img_source[props.index_img]}.gif`} width={'100px'} height={'100px'} priority/>
            </div>
        </Link>
    )
}