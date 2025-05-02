import { Image, ImageProps } from '@/components';

export interface IconProps extends Omit<ImageProps, 'src' | 'alt'> {
    name: string
}

export function Icon(props: IconProps) {
    return (
        <Image
            src={`/icons/${props.name}.svg`}
            alt="Icon"
            {...props}
        />
    )
}