import {default as NextImg, ImageProps as NextImgProps } from "next/image";

export interface ImageProps extends NextImgProps {
}

export function Image(props: ImageProps) {
    const className = props.className
    props = {className: "", ...props}

    return (
        <div className={className} style={{position: "relative", overflow: "hidden"}}>
            <NextImg fill {...props}/>
        </div>
    )
}