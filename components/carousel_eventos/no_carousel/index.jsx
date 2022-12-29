import Link from "next/link"
import Image from "next/image"
import Wait from "../wait"

export default function No_Carousel(props)
{
    let image_width, image_heigth, color_theme
    let list = []
    if(props.list) list = props.list

    if(props.color) color_theme = props.color
    else color_theme = '#A82A44'
    if(props.image_width) image_width = props.image_width
    else image_width = 20
    if(props.image_heigth) image_heigth = props.image_heigth
    else image_heigth = 20 

    return (
        <div className="container">
        {   list.length <= 0 ? <Wait color={color_theme}/> :
            list.map(({image_source, link}, index) => 
                <Link key={index} href={link}>                    
                    <a style={{width: `${image_width}vw`, height:`${image_heigth}vw`, position: 'relative'}}>
                        <Image src={image_source} layout='fill'/>                        
                    </a>
                </Link>                
            )            
        }
        <style jsx>{`
            .container
            {                    
                width: ${props.width ? props.width : 80}vw;
                height: ${props.image_heigth ? props.image_heigth : 20}vw;

                display: flex;
                justify-content: space-evenly;
                align-items: center;
            }                
        `}</style>
        </div>
    )
}