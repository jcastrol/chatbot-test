"use client";
import Link from "next/link";

type Props = {
  chats: {
    id: string;
    title: string;
  }[];
  onSelect: (chatId: string) => void;
  onNewChat: () => void;
  selectedChatId?: string;
};

export function ChatSidebarView({
  chats,
  onSelect,
  onNewChat,
  selectedChatId,
}: Props) {
  return (
    <div className="w-72 h-screen bg-[#1E2A38] text-white flex flex-col">
      {/* Header */}
      <div className="p-4 font-bold text-xl border-b border-white/10">
        CHAT APP
      </div>

      {/* New Chat Button */}
      <button
        onClick={onNewChat}
        className="flex items-center gap-2 p-4 hover:bg-white/10 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v6h6a1 1 0 110 2h-6v6a1 1 0 11-2 0v-6H3a1 1 0 110-2h6V3a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
        <span>New Chat</span>
      </button>

      {/* Search bar */}
      <div className="px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-3 py-2 rounded-md bg-[#2A3949] text-sm placeholder-gray-400 outline-none"
        />
      </div>

      {/* Chats list */}
      <div className="flex-1 overflow-y-auto mt-2">
        {chats.length > 0 ? (
          chats.map((chat) => {
            const isSelected = chat.id === selectedChatId;
            const baseClass =
              "w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition";
            const selectedClass = isSelected ? "bg-white/10" : "";

            return (
              <button
                key={chat.id}
                onClick={() => onSelect(chat.id)}
                className={`${baseClass} ${selectedClass}`}
              >
                {chat.title}
              </button>
            );
          })
        ) : (
          <></>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 text-xs p text-gray-400">
        <div className="mt-6 py-2 border-t border-white/10">
          <Link
            href="/user"
            className="block text-sm text-blue-600 hover:underline"
          >
            👤 Ver perfil
          </Link>
        </div>
        <p>User: demo@example.com</p>
      </div>
    </div>
  );
}
