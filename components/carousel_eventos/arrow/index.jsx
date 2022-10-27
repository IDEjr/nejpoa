import { useEffect, useState } from 'react';

export default function Arrow(props)
{
    const [scale, setScale] = useState("")

    //console.log(props)

    return(
        <div className="seta_default" 
             onMouseOver={()=>setScale("scale(1.2)")}
             onMouseLeave={()=>setScale("")}
             onClick={() => {props.fun ? (props.fun)() : ()=>{} }}>

            <style jsx>{`
                    .seta_default 
                    {
                        position: absolute;
                        background-color: rgba(0, 0, 0, 0);
                    
                        width: 20px;
                        height: 20px;
                        border: solid;
                        border-width: 0 0 5px 5px;   
                    
                    
                        transition: transform 0.1s;
                        
                        z-index: 3;
                        transform: rotate(${props.rot ? props.rot : '45'}deg) ${scale};
                        border-color: ${props.color ? props.color:'black'};
                        left: ${props.left ? props.left : ''};
                        right: ${props.right ? props.right : ''};
                    }
            `}</style>
        </div>
    )
    

}