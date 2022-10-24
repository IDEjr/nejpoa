import Title from "./title";
import Carousel from "./carousel";
import Button from './button'

export default function Carousel_Eventos(props)
{
    return(
        <>
            <Title/>
            <Carousel list={props.list}/>
            <Button/>
        </>
        
    )
}