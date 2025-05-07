import { FaPaperPlane } from "react-icons/fa"; 
import { GiBrain } from "react-icons/gi";

type Props = {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
};

export function ChatInput({ value, onChange, onSend }: Props) {
  return (
    <>
      <div className="px-4 py-3 bg-white rounded-full shadow-md flex items-center w-full max-w-2xl mx-auto my-5 ">
        <GiBrain className="text-pink-400 text-xl ml-2 mr-3" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="What's in your mind?..."
          className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent"
        />

        <button
          onClick={onSend}
          className="bg-[#4D96FF] hover:bg-blue-600 text-white rounded-full p-2 ml-2"
        >
          <FaPaperPlane className="text-base" />
        </button>
      </div>
    </>
  );
}
