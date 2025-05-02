import { Image, ImageProps } from "@/components";

export function BusinessLogo(props: Omit<ImageProps, 'src' | 'alt'>) {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      {...props}
    />
  )
}