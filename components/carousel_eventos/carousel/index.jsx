import style from './carousel.module.css'
import Wait from '../wait'
import Arrow from '../arrow'

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';

function walk_back(num, x, len)
{
    if(len < 2) return num
    x = x%len
    if((num - x) < 0)
    {
        return (len + (num - x))
    }else return num-x
}

export default function Carousel(props)
{
    let width, color_theme, background_color, qde_show, image_width, image_heigth
    let list = []
    let list_hookers_transl = []
    let list_hookers_zIndex = []

    if(props.qde_show) qde_show = props.qde_show
    else qde_show = 1
    if(props.width) width = props.width
    else width = 80    
    if(props.color) color_theme = props.color
    else color_theme = '#A82A44'
    /*
    if(props.background_color) background_color = props.background_color
    else background_color = 'purple'*/
    if(props.image_width) image_width = props.image_width
    else image_width = 20
    if(props.image_heigth) image_heigth = props.image_heigth
    else image_heigth = 20 
    
    const [cur, setCur] = useState(parseInt(props.list ? parseInt(props.list.length / 2) : 0))
    const [end_l, setEnd] = useState(props.list ? props.list.length - 1 : 0);
    const [start_l, setStart] = useState(0);
    let translate_rate = (width - image_width)/3 + 3
    //let translate_rate = image_width + (width - image_width)/2

    if(props.list)
    {
        
        for(let i=0; i < props.list.length; i++)
        {
            let transl = 0
            if(i < cur) transl = -translate_rate
            if(i > cur) transl = +translate_rate            
            list_hookers_transl.push(useState(transl))
            list_hookers_zIndex.push(useState(0))
            list.push(
                <Link href={props.list[i].link}>                    
                    <a className={style.retangle_image} style={{width:`${image_width}vw`, height:`${image_heigth}vw`, transform: `translate(${list_hookers_transl[i][0]}vw)`, zIndex:`${list_hookers_zIndex[i][0]}`}}>
                        <Image src={props.list[i].image_source} layout='fill' />
                    </a>
                </Link>)            
        }
    }

    function handleButton_Right()
    {
        let to_do = true
        let order = 2
        //for(let order_cur = (cur + 1)%list.length; order_cur != end_l; order_cur = (order_cur + 1)%list.length, order -= 1) list_hookers_zIndex[order_cur][1](order - 1)
        //for(let order_cur = walk_back(cur, 1, list.length); order_cur != start_l; order_cur = walk_back(cur, 1, list.length), order -= 1) list_hookers_zIndex[order_cur][1](order - 1)
        list_hookers_zIndex[start_l][1](-1)
        list_hookers_transl[start_l][1](list_hookers_transl[start_l][0]+(2*translate_rate))

        list_hookers_zIndex[cur][1](1)
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]-translate_rate)

        list_hookers_zIndex[(cur+1)%list.length][1](1)
        list_hookers_transl[(cur+1)%list.length][1](list_hookers_transl[(cur+1)%list.length][0]-translate_rate)

        setCur((cur + 1)%list.length)
        setStart((start_l + 1)%list.length)
        setEnd((end_l + 1)%list.length)              
    }

    function handleButton_Left()
    {        
        list_hookers_zIndex[end_l][1](-1)
        list_hookers_transl[end_l][1](list_hookers_transl[end_l][0]-(2*translate_rate))

        list_hookers_zIndex[cur][1](1)
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]+translate_rate)

        list_hookers_zIndex[walk_back(cur, 1, list.length)][1](1)
        list_hookers_transl[walk_back(cur, 1, list.length)][1](list_hookers_transl[walk_back(cur, 1, list.length)][0]+translate_rate)

        setCur(walk_back(cur, 1, list.length))
        setEnd(walk_back(end_l, 1, list.length))
        setStart(walk_back(start_l, 1, list.length))
    }
    

    return (
            <div className={style.container} style={{/*backgroundColor: background_color,*/ width:`${width}vw`, height:`${image_heigth}vw`}}>
                <Arrow left={'0px'} fun={handleButton_Left} rot={45} color={color_theme}/>
                { list.length == 0 ? <Wait color={color_theme}/> : <>{list}</>}                
                <Arrow right={'0px'} fun={handleButton_Right} rot={225} color={color_theme}/>
            </div>
    )
}