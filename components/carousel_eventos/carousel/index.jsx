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
    let width, color_theme, qde_show, image_width, image_heigth
    let list = []
    let list_hookers_transl = []
    let list_hookers_zIndex = []

    if(props.qde_show) qde_show = props.qde_show
    else qde_show = 1
    if(props.width) width = props.width
    else width = 80    
    if(props.color) color_theme = props.color
    else color_theme = '#A82A44'
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
            if((i == cur) || (i == (cur+1)%props.list.length) || (i == walk_back(cur, 1, props.list.length))) list_hookers_zIndex.push(useState(2))
            else list_hookers_zIndex.push(useState(0))
            list.push(
                <Link key={i} href={props.list[i].link}>                    
                    <a className="container">
                        <Image src={props.list[i].image_source} layout='fill'/>
                        <style jsx>{`
                            .container
                            {
                                width:${image_width}vw;
                                height:${image_heigth}vw;

                                position: absolute;

                                transition: transform 1s;
                                
                                transform: translate(${list_hookers_transl[i][0]}vw);
                                z-index:${list_hookers_zIndex[i][0]};
                            }                            
                        `}</style>
                    </a>
                </Link>)            
        }
    }

    function handleButton_Right()
    {
        //Ordena os objetos que irão aparecer
        list_hookers_zIndex[start_l][1](-1)
        list_hookers_zIndex[cur][1](2)
        list_hookers_zIndex[(cur+1)%props.list.length][1](2)
        list_hookers_zIndex[(cur+2)%props.list.length][1](1)
        list_hookers_zIndex[walk_back(cur, 1, props.list.length)][1](1)

        //Movimenta
        list_hookers_transl[start_l][1](list_hookers_transl[start_l][0]+(2*translate_rate))
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]-translate_rate)
        list_hookers_transl[(cur+1)%props.list.length][1](list_hookers_transl[(cur+1)%props.list.length][0]-translate_rate)

        //Atualiza dados
        setCur((cur + 1)%props.list.length)
        setStart((start_l + 1)%props.list.length)
        setEnd((end_l + 1)%props.list.length)              
    }

    function handleButton_Left()
    {
        //Ordena os objetos que irão aparecer        
        list_hookers_zIndex[end_l][1](-1)
        list_hookers_zIndex[cur][1](2)
        list_hookers_zIndex[walk_back(cur, 1, props.list.length)][1](2)
        list_hookers_zIndex[walk_back(cur, 2, props.list.length)][1](1)
        list_hookers_zIndex[(cur+1)%props.list.length][1](1)
        
        //Movimenta
        list_hookers_transl[end_l][1](list_hookers_transl[end_l][0]-(2*translate_rate))
        list_hookers_transl[cur][1](list_hookers_transl[cur][0]+translate_rate)
        list_hookers_transl[walk_back(cur, 1, props.list.length)][1](list_hookers_transl[walk_back(cur, 1, props.list.length)][0]+translate_rate)

        //Atualiza dados
        setCur(walk_back(cur, 1, props.list.length))
        setEnd(walk_back(end_l, 1, props.list.length))
        setStart(walk_back(start_l, 1, props.list.length))
    }
    

    return (
            <div className="container">
            <style jsx>{`
                .container
                {                    
                    width: ${width}vw;
                    height: ${image_heigth}vw;

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                }                
            `}</style>
                { (props.list && props.list.length>0) ? <Arrow left={'0px'} fun={handleButton_Left} rot={45} color={color_theme}/> : null }
                { list.length == 0 ? <Wait color={color_theme}/> : <>{list}</>}
                { (props.list && props.list.length>0) ? <Arrow right={'0px'} fun={handleButton_Right} rot={225} color={color_theme}/> : null }                
                
            </div>
    )
}