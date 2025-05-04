import { Message } from '../domain/entities/Message'
import { SaveMessage } from './saveMessage'
import { GenerateBotResponse } from './generateBotResponse'

// export class SendMessage {
//     constructor(
//       private readonly saveMessage: SaveMessage,
//       private readonly generateBotResponse: GenerateBotResponse
//     ) {}
  
//     async execute(userId: string, chatId: string, userMessage: Message): Promise<void> {
//       await this.saveMessage.execute(userId, chatId, userMessage)
        
//       const botMessage = await this.generateBotResponse.execute(userMessage.content)
      
//       await this.saveMessage.execute(userId, chatId, botMessage)
//     }
//   }

export class SendMessage {
  constructor(
    private readonly saveMessage: SaveMessage,
    private readonly generateBotResponse: GenerateBotResponse
  ) {}

  async execute(userId: string, chatId: string, userInput: string): Promise<void> {
    const userMessage = new Message(
      crypto.randomUUID(),
      'user',
      userInput,
      new Date().toISOString()
    )

    await this.saveMessage.execute(userId, chatId, userMessage)

    const botMessage = await this.generateBotResponse.execute(userInput)

    await this.saveMessage.execute(userId, chatId, botMessage)
  }
}
