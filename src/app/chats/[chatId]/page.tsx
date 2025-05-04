"use client";

import { useParams } from "next/navigation";
import { useChatListViewModel } from "@/features/chat/presentation/viewModels/useChatListViewModel";
import { useChatViewModel } from "@/features/chat/presentation/viewModels/useChatViewModel";

import { ChatSidebarView } from "@/features/chat/presentation/views/ChatSidebarView";
import { ChatMessagesView } from "@/features/chat/presentation/views/ChatMessagesView";
import { ChatInputView } from "@/features/chat/presentation/views/ChatInputView";

export default function ChatPage() {
  const { chatId } = useParams<{ chatId: string }>();
  const {
    chats,
    loading: loadingList,
    handleNewChat,
    handleSelectChat,
  } = useChatListViewModel();

  const {
    chat,
    loading: loadingChat,
    input,
    setInput,
    send,
  } = useChatViewModel(chatId);

  if (loadingList || loadingChat) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <>
      {chat ? (
        <>
          <div className="flex items-center px-6 py-4 border-b text-sm font-semibold text-gray-700">
            {chat.title}
          </div>

          <ChatMessagesView messages={chat.messages} />

          <ChatInputView value={input} onChange={setInput} onSend={send} />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          No chat found.
        </div>
      )}
    </>
  );
}
