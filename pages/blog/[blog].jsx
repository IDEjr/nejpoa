import { useRouter } from "next/router"
export default function AnomBlog(){
    const router = useRouter()
    const {blog} = router.query;
    if(!blog) return <></>;
    const element = require(`../../public/posts/blogs/${blog}`)
   
    return(
        <h1>{element.subtitle}</h1>
    )
}