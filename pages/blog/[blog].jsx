import { useRouter } from "next/router"
import Header from "../../components/Header";
import style from './blog.module.css'
import Image from "next/image";
import Footer from "../../components/footer";
import Slider from "../../components/Sliders/BlogSlider";
import { ReactMarkdown } from "react-markdown/lib/react-markdown"



export default function AnomBlog(){
    const router = useRouter();
    const { blog } = router.query;
    if(!blog) return <></>;
    try{
        require(`../../public/posts/blogs/${blog}`)
    } catch {
        return <h1>OI</h1>
    }

    const element = require(`../../public/posts/blogs/${blog}`)

    
    return(

        <div className={style.blog}>
    
            <Header  home='1'/>
            <div className={style.banner_container}>
                <h1>{element.title}</h1>
                <div className={style.img_blog}>
                    <Image src={element.image_source_alt} layout={'fill'} priority/>
                </div>
                <div className={style.date_container}>
                    <div className={style.date_component}>
                        <span className={style.date}>Publicado {element.date}</span>
                        <span className={style.barra}></span>
                    </div>
                </div>
            </div>
            
            <ReactMarkdown className={style.text_container}>
                {element.content}
            </ReactMarkdown>

          <div className={style.continue_explorando}>
            <div className={style.titleStyled}>
                <h2>Continue explorando</h2>
                <span/>
            </div>
          </div>

            <Footer instagram = "@nejpoa" email = "contato@nejpoa.com.br" theme='light'/>
        </div>
    )
}