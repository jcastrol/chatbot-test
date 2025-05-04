import { Chat } from '../domain/entities/Chat'
import { Message } from '../domain/entities/Message'
import { ChatRepository } from '../domain/repositories/ChatRepository'
import seed from '@/data/chats/chats.json'


import {
  getChatsFromStorage,
  saveChatsToStorage
} from '@/shared/lib/storage/chatStorage'

export class ChatJsonRepository implements ChatRepository {
  private getAllData(): any[] {
    const stored = getChatsFromStorage()
    return stored.length > 0 ? stored : seed
  }

  private saveAllData(data: any[]) {
    saveChatsToStorage(data)
  }

  async getAllByUserId(userId: string): Promise<Chat[]> {
    const data = this.getAllData()
    const userData = data.find(u => u.userId === userId)
    if (!userData) return []

    return userData.chats.map((chat: any) =>
      new Chat(
        chat.id,
        chat.title,
        (chat.messages ?? []).map(
          (m: any) => new Message(m.id, m.sender, m.content, m.timestamp)
        )
      )
    )
  }

  async getById(chatId: string): Promise<Chat | null> {
    const data = this.getAllData()

    for (const user of data) {
      const found = user.chats?.find((c: any) => c.id === chatId)
      if (found) {
        return new Chat(
          found.id,
          found.title,
          (found.messages ?? []).map(
            (m: any) => new Message(m.id, m.sender, m.content, m.timestamp)
          )
        )
      }
    }

    return null
  }

  async save(chat: Chat, userId: string): Promise<void> {
    const data = await this.getAllData()

    let user = data.find(u => u.userId === userId)
    if (!user) {
      user = { userId, chats: [] }
      data.push(user)
    }

    const existingIndex = user.chats.findIndex((c: any) => c.id === chat.id)
    if (existingIndex !== -1) {
      user.chats[existingIndex] = chat
    } else {
      user.chats.push(chat)
    }

    this.saveAllData(data)
  }
}

