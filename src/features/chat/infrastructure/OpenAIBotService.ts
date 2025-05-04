import { BotService } from '@/features/chat/domain/services/BotService'
import OpenAI from "openai";
import { Message } from '../domain/entities/Message';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export class OpenAIBotService implements BotService {
    async generateResponse(userMessage: string): Promise<Message> {
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Eres un asistente útil.' },
          { role: 'user', content: userMessage }
        ]
      });
       const content = completion.choices[0].message.content?.trim() || 'Lo siento, no entendí.'
      return new Message(
        crypto.randomUUID(),
        'bot',
        content,
        new Date().toISOString()
      )
    }
  }
