import {default as NextImg, ImageProps as NextImgProps } from "next/image";

export function Image(props: NextImgProps) {
    const className = props.className
    props = {className: "", ...props}

    return (
        <div className={className} style={{position: "relative", overflow: "hidden"}}>
            <NextImg fill {...props}/>
        </div>
    )
}