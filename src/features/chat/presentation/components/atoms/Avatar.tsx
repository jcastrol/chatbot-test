type Props = {
    src: string | null
    alt?: string
    size?: number
  }
  
  export function Avatar({ src, alt = 'Avatar', size = 32 }: Props) {
    if (!src) return null
    return (
      <div className="rounded-full overflow-hidden bg-gray-200" style={{ width: size, height: size }}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    )
  }
