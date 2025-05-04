import { BotService } from '../domain/services/BotService'
import { Message } from '../domain/entities/Message'

export class GenerateBotResponse {
  constructor(private readonly botService: BotService) {}

  async execute(userInput: string): Promise<Message> {
    return await this.botService.generateResponse(userInput)
  }
}
