import { ChatTitle } from '@/shared/types'
import { ChatItem } from '../molecules/ChatItem'

type Props = {
  chats: ChatTitle[]
  selectedChatId?: string
  loading?: boolean
  onSelect: (chatId: string) => void
}

export function ChatList({ chats, selectedChatId, loading = false, onSelect }: Props) {
  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>
  }

  return (
    <div className="flex-1 overflow-y-auto pl-6 pr-6 hover:pr-2.5 scrollbar-hide">
      {chats.map((chat) => (
        <ChatItem
          key={chat.id}
          title={chat.title}
          selected={chat.id === selectedChatId}
          onClick={() => onSelect(chat.id)}
        />
      ))}
    </div>
  )
}