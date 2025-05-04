import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { Chat } from '@/features/chat/domain/entities/Chat'

type ChatState = {
  chats: Chat[]
  loading: boolean
  setChats: (chats: Chat[]) => void
  addChat: (chat: Chat) => void
  setLoading: (val: boolean) => void
  clear: () => void
}

const useChatStore = create(
  immer<ChatState>((set) => ({
    chats: [],
    loading: false,

    setChats: (chats) => set((state) => {
      state.chats = chats
    }),

    addChat: (chat) => set((state) => {
      state.chats.push(chat)
    }),

    setLoading: (val) => set((state) => {
      state.loading = val
    }),

    clear: () => set((state) => {
      state.chats = []
      state.loading = false
    }),
  }))
)

export default useChatStore