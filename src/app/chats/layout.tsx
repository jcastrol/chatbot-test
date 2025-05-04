'use client'
import { useChatListViewModel } from "@/features/chat/presentation/viewModels/useChatListViewModel";
import { ChatSidebarView } from "@/features/chat/presentation/views/ChatSidebarView";
import { useParams } from "next/navigation";

export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { chatId } = useParams<{ chatId: string }>()
  const {
    chats,
    loading: loadingList,
    handleNewChat,
    handleSelectChat,
  } = useChatListViewModel();
  return (
   
          <div className="flex h-screen">
            {/* Sidebar */}
            <ChatSidebarView
              chats={chats}
              onNewChat={handleNewChat}
              onSelect={handleSelectChat}
              selectedChatId={chatId}
            />

            {/* Chat area */}
            <div className="flex flex-col flex-1 bg-white">{children}</div>
          </div>
       
  );
}
