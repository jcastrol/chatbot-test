'use client'
import { useParams } from 'next/navigation'
import { useChatListViewModel } from '@/features/chat/presentation/viewModels/useChatListViewModel'
import { ChatSidebarView } from '@/features/chat/presentation/views/ChatSidebarView'

export default function ChatLayout() {
  const { chatId } = useParams()
  const { chats, loading, handleNewChat, handleSelectChat } = useChatListViewModel()

  if (loading) return <p className="p-6">Loading chats...</p>

  return (
    <ChatSidebarView
      chats={chats}
      onNewChat={handleNewChat}
      onSelect={handleSelectChat}
      selectedChatId={chatId as string}
    />
  )
}