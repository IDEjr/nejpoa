import { useRouter } from "next/router"

export default function Anom(){
    const router = useRouter()
    console.log(router)
    const {eventos} = router.query;
    if(!eventos) return <></>;
    
    const content = require(`../../public/posts/eventos/${eventos}`)
    console.log(eventos)
   
    return(
        <>
            <h1>a</h1>
            <h1>a</h1>
        </>
    )
}