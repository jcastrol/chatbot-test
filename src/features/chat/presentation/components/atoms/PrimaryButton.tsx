import { ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export function PrimaryButton({ children, className = '', ...props }: Props) {
  return (
    <button
      className={`bg-[#4D96FF] text-white text-sm py-2 px-4 rounded-full hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
