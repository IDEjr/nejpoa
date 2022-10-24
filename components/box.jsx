
export default function Box(props)
{
    let child;
    if(!props.children) child = <></>;
    else child = props.children;

    let style;

    if(!props.invert)
    {
        style = {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center"
        }

    }else
    {
        style = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
        }
    }

    return(        
        
        <div style={style}>
            {child}
        </div>        
    )

}