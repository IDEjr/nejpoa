import style from './style.module.css'
import Image from 'next/image'
import TextBox from './text_box'
import ButtonBox from './button_box'
export default function MEJ(){
    return (
        <>
        <div className={style.container}>
            <h1>MEJ</h1>
            
            <div className={style.content_container}>
                <div className={style.img_nej}>
                    <Image src='/mej/imagemnejpoa.png' layout={'fill'} alt='imagem ilustrativa de uma empresa'/>
                </div>
            
            <div className={style.container_infos}>
                <div className={style.infos}>
                    <TextBox 
                        titulo = 'Fejers'
                        conteudo = 'Federação gaúcha de empresas juniores. Representa e presta suporte as empresas júnior e núcleos do Rio Grande do Sul.'
                    />
                        <ButtonBox img='/mej/fejers.png' link ='https://fejers.org.br/'/>           
                </div>

                <div className={style.infos}>
                    <TextBox 
                        titulo = 'Brasil júnior'
                        conteudo = 'Confederação brasileira de empresas júnior. Representa as federações e da apoio a elas.'
                    />
                    <ButtonBox img='/mej/brasiljunior.png' link='https://brasiljunior.org.br/'/>    
                </div>
            </div>
                
            </div>
        </div>
        </>
    )
}