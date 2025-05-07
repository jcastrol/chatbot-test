'use client'

import { WelcomeChat } from '@/features/chat/presentation/components/molecules/WelcomeChat'
import { ChatInput } from '@/features/chat/presentation/components/molecules/ChatInput'
import { useStartChatViewModel } from '@/features/chat/presentation/viewModels/useStartChatViewModel'


export default function ChatsPage() {
  const { input, setInput, send, loading } = useStartChatViewModel()

 

  return (
    <>
      <WelcomeChat />
      <ChatInput  value={input} onChange={setInput} onSend={send} />
    </>
  )
}