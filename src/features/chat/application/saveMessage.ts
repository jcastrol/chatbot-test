import { ChatRepository } from '../domain/repositories/ChatRepository'
import { Message } from '../domain/entities/Message'

export class SaveMessage {
  constructor(private readonly chatRepo: ChatRepository) {}

  async execute(userId: string, chatId: string, message: Message): Promise<void> {
    const chat = await this.chatRepo.getById(chatId)
    if (!chat) throw new Error('Chat not found')

    chat.addMessage(message)
    await this.chatRepo.save(chat, userId)
  }
}
