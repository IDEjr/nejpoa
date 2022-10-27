import Title from "./title";
import Carousel from "./carousel";
import Button from './button'

export default function Carousel_Eventos(props)
{
    return(
        <div className="container"><style jsx>{`
            .container
            {
                width: ${props.width ? props.width : 100}vw;
                background-color: ${props.backgroundColor? props.backgroundColor : '#DCDCDC'};

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                position: relative;
            }
        `}</style>

            <Title title={props.title} color={props.color}/>
            <Carousel list={props.list} color={props.color} width={props.width} image_width={props.image_width} image_heigth={props.image_heigth}/>
            <Button color={props.color} link={props.link}/>
        </div>
        
    )
}