type Props = {
    value: string
    onChange: (val: string) => void
    onSend: () => void
  }
  
  export function ChatInputView({ value, onChange, onSend }: Props) {
    return (
      <div className="p-4 border-t flex items-center gap-2">
        <input
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="What's in your mind?..."
          className="flex-1 border rounded-full px-4 py-2 text-sm"
        />
        <button
          onClick={onSend}
          className="bg-[#4D96FF] text-white rounded-full px-4 py-2 text-sm"
        >
          Send
        </button>
      </div>
    )
  }
  