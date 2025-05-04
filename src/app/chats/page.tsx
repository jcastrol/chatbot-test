'use client'

import { EmptyChatView } from '@/features/chat/presentation/views/EmptyChatView'
import { ChatInputView } from '@/features/chat/presentation/views/ChatInputView'
import { useStartChatViewModel } from '@/features/chat/presentation/viewModels/useStartChatViewModel'


export default function ChatsPage() {
  const { input, setInput, send, loading } = useStartChatViewModel()

 

  return (
    <>
      <EmptyChatView />
      <ChatInputView value={input} onChange={setInput} onSend={send} />
    </>
  )
}