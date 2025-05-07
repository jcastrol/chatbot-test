type Props = {
    content: string
    className?: string
  }
  
  export function TextMessage({ content, className = '' }: Props) {
    return <p className={`text-sm text-gray-500 mb-1 ${className}`}>{content}</p>
  }
  