import Title from "./title";
import Carousel from "./carousel";
import Button from './button'

export default function Carousel_Eventos(props)
{
    return(
        <>
            <Title title={props.title} color={props.color}/>
            <Carousel list={props.list} color={props.color} image_heigth={props.image_heigth}/>
            <Button color={props.color}/>
        </>
        
    )
}