import { ChatMessage } from '../molecules/ChatMessage'
import { User, Message } from '@/shared/types'

type Props = {
  user: User
  messages: Message[]
}

export function ChatConversation({ messages, user }: Props) {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            sender={msg.sender}
            content={msg.content}
            avatarUrl={msg.sender === 'user' ? user.avatarUrl : null}
          />
        ))}
      </div>
    </div>
  )
}