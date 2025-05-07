type Props = {
    children: React.ReactNode
    className?: string
  }
  
  export function Label({ children, className = '' }: Props) {
    return <span className={`text-sm text-gray-600 ${className}`}>{children}</span>
  }
  