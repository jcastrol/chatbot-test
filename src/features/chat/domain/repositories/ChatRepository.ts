import { Chat } from '../entities/Chat'

export interface ChatRepository {
  getAllByUserId(userId: string): Promise<Chat[]>
  getById(chatId: string): Promise<Chat | null>
  save(chat: Chat, userId: string): Promise<void> 
}
