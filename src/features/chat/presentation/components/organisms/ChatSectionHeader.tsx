type Props = {
    onClearAll?: () => void
  }
  
  export function ChatSectionHeader({ onClearAll }: Props) {
    return (
      <div className="px-6 py-4 text-xs text-gray-500 flex justify-between items-center">
        <span>Your conversations</span>
        <button className="text-xs text-blue-600 hover:underline" onClick={onClearAll}>
          Clear All
        </button>
      </div>
    )
  }
  