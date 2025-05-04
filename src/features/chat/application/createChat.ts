import { Chat } from '../domain/entities/Chat'
import { ChatRepository } from '../domain/repositories/ChatRepository'

export class CreateChat {
  constructor(private readonly chatRepo: ChatRepository) {}

  async execute(userId: string, title: string): Promise<Chat> {
    const chat = new Chat(
      crypto.randomUUID(),
      title.slice(0, 40),
      []
    )

    await this.chatRepo.save(chat, userId)
    return chat
  }
}