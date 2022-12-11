import styles from './styles.module.css'
import BoxSobre from './BoxSobre'
import Descricao from './Descricao'
import Title from '../title'

export default function Sobre(){
    let conteudo = "Fundado em 2012 como NEJ UFRGS, o NEJ POA é um dos 3 núcleos do Rio Grande do Sul que tem, desde o início de sua jornada, a missão de representar e potencializar as empresas juniores, tendo expandido esse foco em 2016 para toda cidade de Porto Alegre. Contamos com aproximadamente 500 estudantes trabalhando voluntariamente, realizando projetos de qualidade na busca por um Rio Grande do Sul mais empreendedor e nosso dever é potencializar seus resultados através dos nossos produtos."

    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div id='sobre nós' className={styles.container}>
                <BoxSobre titulo= '32' conteudo='Empresas Juniores' cor='vermelho'/>
                <BoxSobre titulo='1.3' conteudo='milhão de faturamento em 2022' cor='azul'/>        
                <BoxSobre titulo='683' conteudo='Contratos Feitos' cor='vermelho'/> 
                
            </div>
        <Descricao content={conteudo}/>
        </div>
    )
}
