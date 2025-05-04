import { ChatRepository } from '../domain/repositories/ChatRepository'
import { Chat } from '../domain/entities/Chat'

export class GetChats {
  constructor(private readonly repo: ChatRepository) {}

  async execute(userId: string): Promise<Chat[]> {
    return this.repo.getAllByUserId(userId)
  }
}