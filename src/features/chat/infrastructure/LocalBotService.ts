import { BotService } from '@/features/chat/domain/services/BotService'
import { Message } from '@/features/chat/domain/entities/Message'

export class LocalBotService implements BotService {
  async generateResponse(userMessage: string): Promise<Message> {
    const content = `🤖 Placeholder: "${userMessage}" is a great question!`
    return new Message(
      crypto.randomUUID(),
      'bot',
      content,
      new Date().toISOString()
    )
  }
}
