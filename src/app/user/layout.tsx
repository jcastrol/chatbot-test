'use client'
import { useChatListViewModel } from "@/features/chat/presentation/viewModels/useChatListViewModel";
import { ChatSidebarView } from "@/features/chat/presentation/views/ChatSidebarView";
import { useUserProfileViewModel } from "@/features/user/presentation/viewMoldels/useUserProfileViewModel";
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
  const {user,loading}=useUserProfileViewModel()
  return (
   
          <div className="flex h-screen">
            {/* Sidebar */}
            <ChatSidebarView
              chats={chats}
              onNewChat={handleNewChat}
              onSelect={handleSelectChat}
              selectedChatId={chatId}
              loading={loadingList || loading}
              user={{
                avatarUrl: user?.avatarUrl ?? null,
                fullName: user?.fullName ?? "",
              }}
            />

            {/* Chat area */}
            <div className="flex flex-col flex-1 bg-white">{children}</div>
          </div>
       
  );
}
