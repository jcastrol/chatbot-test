type Props = {
  user:{
    avatarUrl: string | null ;
  },
  messages: {
    id: string;
    sender: "user" | "bot";
    content: string;
    timestamp: string;
  }[];
};



export function ChatMessagesView({ messages,user }: Props) {
  return (
    <div className="p-6 max-w-3xl mx-auto ">
      <div className="space-y-4">
        {messages.map((msg) => (
          <ChatMessage
            key={msg.id}
            id={msg.id}
            sender={msg.sender}
            content={msg.content}
            timestamp={msg.timestamp}
            avatarUrl={user.avatarUrl} 
          />
        ))}
      </div>
    </div>
  );
}

type Message = {
  id: string;
  sender: "user" | "bot";
  content: string;
  timestamp?: string;
  avatarUrl?: string | null; // URL de la imagen del avatar
};

export function ChatMessage({ sender, content,avatarUrl }: Message) {
  const isUser = sender === "user";

  if (isUser) {
    return (
      <div className="w-full pt-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-200 shrink-0">
        { avatarUrl !== null && avatarUrl !== undefined
          ?<img
            src={avatarUrl}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
          :<></>
        }
        </div>
        <p className=" text-sm text-gray-500 mb-1">{content}</p>
      </div>
    );
  }

  return (
    <div className="pb-8 border-b border-gray-200 ">
      <div className="flex items-center text-sm text-blue-600 font-semibold mb-4">
        <span className="mr-1">CHAT APP</span>
        <span className="text-gray-400">💬</span>
      </div>
      <div className="prose prose-sm text-gray-800 max-w-none">
        <p>{content}</p>
      </div>
    </div>
  );
}
