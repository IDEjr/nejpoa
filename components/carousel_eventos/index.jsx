import Title from './title';
import No_Carousel from './no_carousel'
import Carousel from './carousel';
import Button from './button'

export default function Carousel_Eventos(props)
{

    let list = [];
    if(props.list) list = props.list
    return(
        <div className="container"><style jsx>{`
            .container
            {
                width: ${props.width ? props.width : 100}vw;
                background-color: ${props.backgroundColor? props.backgroundColor : '#EEEEEE'};
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                position: relative;

                ${props.button ? '' : 'padding-bottom: 12%;'}
            }
        `}</style>

            <Title title={props.title} color={props.color}/>
            {list.length <= 3 ? 
                <No_Carousel list={list} color={props.color} image_width={props.image_width} image_heigth={props.image_heigth} /> : 
                <Carousel list={list} color={props.color} width={props.width} image_width={props.image_width} image_heigth={props.image_heigth} right={props.right} left={props.left} align={props.align}/>
            }
            {props.button ? <Button color={props.color} link={props.link}/> : <></>}
        </div>
        
    )
}