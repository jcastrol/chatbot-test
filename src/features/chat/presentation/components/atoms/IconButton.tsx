import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  size?: number
}

export function IconButton({ children, size = 36, className = '', ...props }: Props) {
  return (
    <button
      style={{ width: size, height: size }}
      className={`rounded-full bg-black/90 flex items-center justify-center text-white hover:opacity-80 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
