'use client'

import {  useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChatJsonRepository } from '@/features/chat/infrastructure/ChatFromJsonRepository'
import { SaveMessage } from '@/features/chat/application/saveMessage'
import { GenerateBotResponse } from '@/features/chat/application/generateBotResponse'
import { SendMessage } from '@/features/chat/application/sendMessage'

import { Message } from '@/features/chat/domain/entities/Message'
import { getUserFromServerCookies } from "@/shared/lib/cookies/getUserFromServerCookies";
import { CreateChat } from '@/features/chat/application/createChat'

import { LocalBotService } from '@/features/chat/infrastructure/LocalBotService'

// descomentar comentar si  tienes api key
//import { botService } from '../../infrastructure/adapters/BotServiceAdapter'

export function useStartChatViewModel() {
  const router = useRouter()
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(true)

   const chatRepo = new ChatJsonRepository();

    
    const botService = new LocalBotService();
    const generateBotResponse = new GenerateBotResponse(botService);
    const saveMessageUseCase = new SaveMessage(chatRepo);
    const sendMessageUseCase = new SendMessage(
      saveMessageUseCase,
      generateBotResponse
    );  
  const createChatUseCase = new CreateChat(chatRepo)


  const send = async () => {
    const user = await getUserFromServerCookies()
    if (!user || !input.trim()) return
    
    const newChat = await createChatUseCase.execute(user.id, input)
    
    const userMessage = new Message(
      crypto.randomUUID(),
      'user',
      input,
      new Date().toISOString()
    )

    setInput('')
    await sendMessageUseCase.execute(user.id, newChat.id, input);
    router.push(`/chats/${newChat.id}`)
  }

  return {
    input,
    setInput,
    send,
    loading
  }
}
