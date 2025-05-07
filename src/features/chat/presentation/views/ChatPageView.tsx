import { ChatConversation } from "../components/organisms/ChatConversation";

import { ChatInputOverlay } from "../components/organisms/ChatInputOverlay";
import { User } from "@/shared/types";

type Props = {
  chat: {
    messages: {
      id: string;
      sender: "user" | "bot";
      content: string;
      timestamp: string;
    }[];
  } | null;
  user: User | null;
  loadingUser: boolean;
  loadingChat: boolean;
  input: string;
  setInput: (value: string) => void;
  send: () => void;
};

export function ChatPageView({
  chat,
  user,
  loadingUser,
  loadingChat,
  input,
  setInput,
  send,
}: Props) {
  if (loadingUser || loadingChat) {
    return (
      <div className="flex flex-col h-screen relative">
        <div className="overflow-y-auto h-full pt-6 pb-32 px-4 space-y-6">
          <p className="text-gray-500">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen relative">
      {chat ? (
        <>
          <div className="overflow-y-auto h-full pt-6 pb-32 px-4 space-y-6">
            {user && (
              <ChatConversation
                messages={chat.messages}
                user={user}
              />
            )}
          </div>
          <ChatInputOverlay input={input} onChange={setInput} onSend={send} />
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          No chat found.
        </div>
      )}
    </div>
  );
}
