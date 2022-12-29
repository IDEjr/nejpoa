import { useRouter } from "next/router"
import Header from "../../components/Header";
import style from './blog.module.css'
import Image from "next/image";
export default function AnomBlog(){
    const router = useRouter()
    const {blog} = router.query;
    if(!blog) return <></>;
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
        </div>
    )
}