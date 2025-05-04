"use server";

import { OpenAIBotService } from "@/features/chat/infrastructure/OpenAIBotService";
import { GenerateBotResponse } from "@/features/chat/application/generateBotResponse";
import { Message } from "@/features/chat/domain/entities/Message";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateBotResponseServer(
  userInput: string
): Promise<Message> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Eres un asistente útil." },
        { role: "user", content: userInput },
      ],
    });
    console.log("response", response);
    const content =
      response.choices[0].message.content?.trim() || "Lo siento, no entendí.";

    return new Message(
      crypto.randomUUID(),
      "bot",
      content,
      new Date().toISOString()
    );
  } catch (error: any) {
    if (error.status === 429) {
      console.error("Cuota excedida. Revisa tu plan y uso.");
    }
    throw error;
  }
}
