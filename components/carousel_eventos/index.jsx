import style from './carousel_eventos.module.css'
import Wait from '../wait'
import Arrow from '../arrow_carousel'

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

export default function Carousel_Eventos(props)
{
    let width, color_theme, background_color, width_image, height_image
    let list = []
    let list_hookers_transl = []
    let list_hookers_zIndex = []

    if(props.width) width = props.width
    else width = 26    
    if(props.color) color_theme = props.color
    else color_theme = '#A82A44'
    if(props.background_color) background_color = props.background_color
    else background_color = 'white'
    if(props.width_image) width_image = props.width_image
    else width_image = 20
    if(props.height_image) height_image = props.height_image
    else height_image = 20 

    const [cur, setCur] = useState(3);
    const [end_l, setEnd] = useState(5);
    const [start_l, setStart] = useState(0);

    function upload_images(input)
    {
        if(!input) return -1 

        for(let i=0; i < input.length; i++)
        {
            let translate = 0
            if(i<cur) translate = -26
            if(i>cur) translate = 26
            list_hookers_transl.push(useState(translate))
            list_hookers_zIndex.push(useState(1))
            list.push(
                <Link href={input[i].link}>
                    <a className={style.retangle_image} style={{width: `${width_image}vw`, height: `${height_image}vw`, transform: `translate(${list_hookers_transl[i][0]}vw)`, zIndex:`${list_hookers_zIndex[i][0]}`}}>
                        <Image src={input[i].image_source} layout='fill' />
                    </a>
                </Link>)
        }
    }
    
    upload_images(props.list)    
    
    function walk_back(num, x, len)
    {
        if(len < 2) return num
        x = x%len
        if((num - x) < 0)
        {
            return (len + (num - x))
        }else return num-x
    }

    let qde_show = width/(width_image+2)
    let qde_n_show = list.length - qde_show

    console.log(qde_show)
    console.log(qde_n_show)

    

    function handleButton_Right()
    {
        list_hookers_zIndex[start_l][1](-1)
        list_hookers_transl[start_l][1](list_hookers_transl[start_l][0]+52)

        list_hookers_zIndex[cur][1](1)
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]-26)

        list_hookers_zIndex[(cur+1)%list.length][1](1)
        list_hookers_transl[(cur+1)%list.length][1](list_hookers_transl[(cur+1)%list.length][0]-26)

        setCur((cur + 1)%list.length)
        setStart((start_l + 1)%list.length)
        setEnd((end_l + 1)%list.length)              
    }

    function handleButton_Left()
    {
        list_hookers_zIndex[end_l][1](-1)
        list_hookers_transl[end_l][1](list_hookers_transl[end_l][0]-52)

        list_hookers_zIndex[cur][1](1)
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]+26)

        list_hookers_zIndex[walk_back(cur, 1, list.length)][1](1)
        list_hookers_transl[walk_back(cur, 1, list.length)][1](list_hookers_transl[walk_back(cur, 1, list.length)][0]+26)

        setCur(walk_back(cur, 1, list.length))
        setEnd(walk_back(end_l, 1, list.length))
        setStart(walk_back(start_l, 1, list.length)) 
    }
    
    

    return (
            <div className={style.container} style={{backgroundColor: background_color, width:`${width}vw`, minHeight:`${height_image}vw`}}>
                <Arrow fun={handleButton_Left} rot={45} color={color_theme}/>
                { list.length == 0 ? <Wait color={color_theme}/> :
                    <>
                        {list}                    
                    </>                    
                }                
                <Arrow fun={handleButton_Right} rot={225} color={color_theme}/>
            </div>
    )
}