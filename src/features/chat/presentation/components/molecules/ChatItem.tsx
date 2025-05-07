import { LiaCommentDots } from 'react-icons/lia'
import { Label } from '../atoms/Label'

type Props = {
  title: string
  selected?: boolean
  onClick?: () => void
}

export function ChatItem({ title, selected = false, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-2 px-6 py-2 my-1 text-xs rounded-full transition truncate
        ${selected ? 'bg-[#E6EDFF] text-[#4D96FF] font-semibold' : 'hover:bg-gray-100 text-[#646464] font-semibold'}
      `}
    >
      <LiaCommentDots />
      <Label className="truncate">{title}</Label>
    </button>
  )
}
