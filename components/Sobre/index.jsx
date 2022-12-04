import styles from './styles.module.css'
import BoxSobre from './BoxSobre'
export default function Sobre(){
    return(
        <div id='sobre nós' className={styles.container}>
            <BoxSobre titulo= '32' conteudo='Empresas Juniores' cor='vermelho'/>       
            <BoxSobre titulo='683' conteudo='Contratos Feitos' cor='azul'/> 
            <BoxSobre titulo='1.3' conteudo='milhão de faturamento em 2022' cor='vermelho'/> 
        </div>
    )
}
