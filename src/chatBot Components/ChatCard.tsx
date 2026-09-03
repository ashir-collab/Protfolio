import { useState, useRef, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import ChatbotInput from "./ChatbotInput";
import { ChatbotApiService } from "../api/ChatbotApi";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

interface ChatCardProps {
  onClose: () => void;
}

const ChatCard = ({ onClose }: ChatCardProps) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey! How can I help you today?", sender: "bot" },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    const userMsg: Message = { id: Date.now(), text, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setError(null);

    try {
      const reply = await ChatbotApiService.sendMessage(text);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setError("Couldn't send that — try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 w-80 h-[28rem] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="font-medium text-black">Chat with us</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-black">
          <IoClose size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl text-sm ${
                msg.sender === "user"
                  ? "bg-black text-white rounded-br-sm"
                  : "bg-gray-100 text-black rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          </div>
        )}

        {error && <p className="text-xs text-red-500 px-1">{error}</p>}

        <div ref={messagesEndRef} />
      </div>

      <ChatbotInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};

export default ChatCard;
