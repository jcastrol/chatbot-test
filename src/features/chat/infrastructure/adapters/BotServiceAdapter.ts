import { BotService } from "../../domain/services/BotService"
import { generateBotResponseServer } from "../../presentation/server/generateBotResponseServer"

export const botService: BotService = {
    async generateResponse(input: string) {
      return await generateBotResponseServer(input)
    }
  }
  