"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Chat } from "@/features/chat/domain/entities/Chat";
import { Message } from "@/features/chat/domain/entities/Message";
import { ChatJsonRepository } from "@/features/chat/infrastructure/ChatFromJsonRepository";
import { LocalBotService } from "@/features/chat/infrastructure/LocalBotService";
import { GenerateBotResponse } from "@/features/chat/application/generateBotResponse";
import { SaveMessage } from "@/features/chat/application/saveMessage";
import { SendMessage } from "@/features/chat/application/sendMessage";
import { getUserFromServerCookies } from "@/shared/lib/cookies/getUserFromServerCookies";

// descomentar para usar el api de openai
//import { botService } from "../../infrastructure/adapters/BotServiceAdapter";

export function useChatViewModel(chatId: string) {
  const [chat, setChat] = useState<Chat | null>(null);
  const [loading, setLoading] = useState(true);
  const [input, setInput] = useState("");
  const router = useRouter();

  const chatRepo = new ChatJsonRepository();
  const botService = new LocalBotService();
  const generateBotResponse = new GenerateBotResponse(botService);
  const saveMessageUseCase = new SaveMessage(chatRepo);
  const sendMessageUseCase = new SendMessage(
    saveMessageUseCase,
    generateBotResponse
  );

  const loadChat = async () => {
    const user = await getUserFromServerCookies();
    console.log("user", user);
    if (!user) {
      router.replace("/login");
      return;
    }

    const chat = await chatRepo.getById(chatId);
    setChat(chat);
    setLoading(false);
  };

  const send = async () => {
    const user = await getUserFromServerCookies();

    if (!user || !input.trim()) return;

    await sendMessageUseCase.execute(user.id, chatId, input);
    setInput("");
    await loadChat();
  };

  const handleNewChat = async () => {
    const user = await getUserFromServerCookies();
    if (!user) {
      router.replace("/login");
      return;
    }

    const newChat = new Chat(crypto.randomUUID(), "New Chat", []);

    await chatRepo.save(newChat, user.id);
    router.push(`/chats/${newChat.id}`);
  };

  useEffect(() => {
    loadChat();
  }, [chatId]);

  return {
    chat,
    loading,
    input,
    setInput,
    send,
    handleNewChat,
  };
}
