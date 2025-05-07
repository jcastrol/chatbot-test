import { ChatInput } from '../molecules/ChatInput'

type Props = {
  input: string
  onChange: (value: string) => void
  onSend: () => void
}

export function ChatInputOverlay({ input, onChange, onSend }: Props) {
  return (
    <div className="absolute bottom-0 left-0 w-full pointer-events-none">
      <div className="relative w-full pb-4 pt-6 pointer-events-auto">
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="h-1/2 bg-gradient-to-t from-[#F8F9FA]/95 to-[#F8F9FA]/0" />
          <div className="h-1/2 bg-gradient-to-t from-[#F8F9FA]/100 to-[#F8F9FA]/95" />
        </div>
        <div className="relative z-10">
          <ChatInput value={input} onChange={onChange} onSend={onSend} />
        </div>
      </div>
    </div>
  )
}
