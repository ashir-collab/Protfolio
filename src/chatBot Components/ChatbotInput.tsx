import { useState } from "react";
import { IoSend } from "react-icons/io5";

interface ChatbotInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

const ChatbotInput = ({ onSend, disabled }: ChatbotInputProps) => {
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!value.trim()) return;
    onSend(value);
    setValue("");
  };

  return (
    <div className="flex items-center gap-2 border-t border-gray-100 px-3 py-2">
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        placeholder="Type a message..."
        className="flex-1 text-sm text-black outline-none px-2 py-1"
      />
      <button
        onClick={handleSubmit}
        disabled={!value.trim()}
        className="bg-black text-white rounded-full p-2 disabled:opacity-30 hover:scale-105 transition-transform"
      >
        <IoSend size={14} />
      </button>
    </div>
  );
};

export default ChatbotInput;