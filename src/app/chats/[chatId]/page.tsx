"use client";

import { useParams } from "next/navigation";
import { useChatViewModel } from "@/features/chat/presentation/viewModels/useChatViewModel";
import { useUserProfileViewModel } from "@/features/user/presentation/viewMoldels/useUserProfileViewModel";
import { ChatPageView } from "@/features/chat/presentation/views/ChatPageView";

export default function ChatPage() {
  const { chatId } = useParams<{ chatId: string }>();

  const {
    chat,
    loading: loadingChat,
    input,
    setInput,
    send,
  } = useChatViewModel(chatId);

  const { user, loading: loadingUser } = useUserProfileViewModel();

  return (
    <ChatPageView
      chat={chat}
      user={user}
      loadingUser={loadingUser}
      loadingChat={loadingChat}
      input={input}
      setInput={setInput}
      send={send}
    />
  );
}
