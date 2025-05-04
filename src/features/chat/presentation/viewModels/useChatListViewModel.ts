'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { ChatJsonRepository } from '@/features/chat/infrastructure/ChatFromJsonRepository'

import { getUserFromServerCookies } from '@/shared/lib/cookies/getUserFromServerCookies'
import { GetChats } from '../../application/getChats'
import useChatStore  from '@/shared/store/chatStore'

export function useChatListViewModel() {
//   const [chats, setChats] = useState<Chat[]>([])
//   const [loading, setLoading] = useState(true)
  const router = useRouter()
  const {
    chats,
    loading,
    setChats,
    addChat,
    setLoading
  } = useChatStore()

  const chatRepo = new ChatJsonRepository()

  const loadChats = async () => {
    const user = await getUserFromServerCookies()
    if (!user) {
      router.replace('/login')
      return
    }
   
    const getChatsUseCase = new GetChats(chatRepo)

    setLoading(true)

    getChatsUseCase.execute(user.id).then(userChats => {
      setChats(userChats)
    }).finally(() => {
      setLoading(false)
    })
    //const userChats = await chatRepo.getAllByUserId(user.id)

    // setChats(userChats)
    // setLoading(false)
  }

  useEffect(() => {
    loadChats()
  }, [])

  const handleNewChat = () => {
    router.push(`/chats/`)
  }

  const handleSelectChat = (chatId: string) => {
    router.push(`/chats/${chatId}`)
  }

  return {
    chats,
    loading,
    handleNewChat,
    handleSelectChat
  }
}
