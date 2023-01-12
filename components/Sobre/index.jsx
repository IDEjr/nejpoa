import styles from './styles.module.css'
import BoxSobre from './BoxSobre'
import Descricao from './Descricao'
import Title from '../title'

export default function Sobre(props){
    let conteudo = 
    (<>
        Fundado em 2012 como NEJ UFRGS, o NEJ POA é um dos 3 núcleos do Rio Grande do Sul que tem, desde o início de sua jornada, a missão de representar e potencializar as empresas juniores, tendo expandido esse foco em 2016 para toda cidade de Porto Alegre. 
            <br/><br/>
        Contamos com aproximadamente 500 estudantes trabalhando voluntariamente, realizando projetos de qualidade na busca por um Rio Grande do Sul mais empreendedor e nosso dever é potencializar seus resultados através dos nossos produtos.
    </>)

    let infos = [];

    props.dados.map( (item,index) => {
        infos[0] = item.empresas_juniores;
        infos[1] = item.contratos_feitos;
        infos[2] = item.faturamento_ano;
        infos[3] = item.conteudo;
    })

    
    return(
        <div style={{display: "flex", flexDirection: "column"}}>
            <div id='sobre nós' className={styles.container}>
                <Title title="Sobre nós"/>
                <div className={styles.adaptative}>
                    <BoxSobre titulo= {infos[0]} conteudo='empresas juniores' cor='vermelho'/>
                    <BoxSobre titulo={infos[1]} conteudo='Contratos Feitos' cor='azul'/>
                    <BoxSobre titulo={infos[2]} conteudo={infos[3]} cor='vermelho'/> 
                </div>
                <Descricao content={conteudo}>
                    <BoxSobre special={true} titulo='500' conteudo='estudantes voluntários' cor='branco'></BoxSobre>
                </Descricao>
            </div>
        </div>
    )
}

{/* <Descricao content={conteudo}/> */}
// <BoxSobre titulo= '32' conteudo='Empresas Juniores' cor='vermelho'/>
// <BoxSobre titulo='1.3' conteudo='milhão de faturamento em 2022' cor='azul'/>        
// <BoxSobre titulo='683' conteudo='Contratos Feitos' cor='vermelho'/> 