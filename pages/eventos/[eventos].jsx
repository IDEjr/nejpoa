import { useRouter } from "next/router"

export default function Anom(){
    const router = useRouter()
    console.log(router)
    const {eventos} = router.query;
    if(!eventos) return <></>;
    
    const content = require(`../../public/posts/eventos/${eventos}`)
    console.log(content)
   
    return(
        <>
            <h1>{content.image_source}</h1>
            <h1>{content.link}</h1>
        </>
    )
}