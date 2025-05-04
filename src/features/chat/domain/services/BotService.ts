import { Message } from '@/features/chat/domain/entities/Message'

export interface BotService {
  generateResponse(userMessage: string): Promise<Message>
}