'use client'
import { useChatListViewModel } from "@/features/chat/presentation/viewModels/useChatListViewModel";
import { ChatSidebarView } from "@/features/chat/presentation/views/ChatSidebarView";
import { useUserProfileViewModel } from "@/features/user/presentation/viewMoldels/useUserProfileViewModel";
import { useParams, useRouter } from "next/navigation";

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
  const router = useRouter()
  return (
   
          <div className="flex h-screen">
            {/* Sidebar */}
            <ChatSidebarView
              chats={chats}
              loading={loadingList || loading}
              onNewChat={handleNewChat}
              onSelect={handleSelectChat}
              selectedChatId={chatId}
              user={{
                avatarUrl: user?.avatarUrl ?? null,
                fullName: user?.fullName ?? "",
              }}
              onUserProfile={() => {router.push('/user')}}
            />

            {/* Chat area */}
            <div className="flex flex-col flex-1">{children}</div>
          </div>
       
  );
}
