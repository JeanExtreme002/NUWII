import { Image, ImageProps } from "@/components";

export interface BusinessLogoProps extends Omit<ImageProps, 'src' | 'alt'> {
}

export function BusinessLogo(props: BusinessLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      {...props}
    />
  )
}