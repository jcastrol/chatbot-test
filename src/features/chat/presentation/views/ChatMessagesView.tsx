type Props = {
    messages: {
      id: string
      sender: 'user' | 'bot'
      content: string
      timestamp: string
    }[]
  }
  
  export function ChatMessagesView({ messages }: Props) {
    return (
      <div className="flex flex-col gap-4 p-4 overflow-y-auto h-[calc(100vh-150px)]">
        {messages.map(m => (
          <div
            key={m.id}
            className={`max-w-[70%] p-3 rounded-lg text-sm ${
              m.sender === 'user'
                ? 'bg-blue-500 text-white self-end'
                : 'bg-gray-100 text-black self-start'
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>
    )
  }
  