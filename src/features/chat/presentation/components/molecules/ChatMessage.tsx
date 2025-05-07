import { Avatar } from '../atoms/Avatar'
import { TextMessage } from '../atoms/TextMessage'
import { BotHeader } from '../atoms/BotHeader'

type Message = {
  sender: 'user' | 'bot'
  content: string
  avatarUrl?: string | null
}

export function ChatMessage({ sender, content, avatarUrl }: Message) {
  if (sender === 'user') {
    return (
      <div className="w-full pt-3 flex items-center gap-3">
        <Avatar src={avatarUrl ?? null} />
        <TextMessage content={content} />
      </div>
    )
  }

  return (
    <div className="pb-8 border-b border-gray-200">
      <BotHeader />
      <div className="prose prose-sm text-gray-800 max-w-none">
        <p>{content}</p>
      </div>
    </div>
  )
}
