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
    {
      id: 1,
      text: "Hey! How can I help you?",
      sender: "bot",
    },
  ]);

  const [isTyping, setIsTyping] = useState(false);
  const [hasStartedResponse, setHasStartedResponse] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    const userMsg: Message = {
      id: Date.now(),
      text,
      sender: "user",
    };

    const botId = Date.now() + 1;

    // Only add the user's message
    setMessages((prev) => [...prev, userMsg]);

    setIsTyping(true);
    setHasStartedResponse(false);
    setError(null);

    try {
      await ChatbotApiService.sendMessage(text, (chunk) => {
        // First chunk has arrived
        setHasStartedResponse(true);

        // Create bot message on first chunk
        setMessages((prev) => {
          const botMessageExists = prev.some((msg) => msg.id === botId);

          if (!botMessageExists) {
            return [
              ...prev,
              {
                id: botId,
                text: chunk,
                sender: "bot",
              },
            ];
          }

          // Append subsequent chunks
          return prev.map((msg) =>
            msg.id === botId
              ? {
                  ...msg,
                  text: msg.text + chunk,
                }
              : msg,
          );
        });
      });
    } catch (error) {
      console.error("Chat error:", error);
      setError("Couldn't send that — try again.");
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-24 right-4 z-50 w-80 h-[28rem] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="font-medium text-black">AI Assistant</h2>

        <button
          onClick={onClose}
          className="text-gray-400 hover:text-black transition-colors"
          aria-label="Close chat"
        >
          <IoClose size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 space-y-2">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[75%] px-3 py-2 rounded-2xl text-xs md:text-sm whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-black text-white rounded-br-sm"
                  : "bg-gray-100 text-black rounded-bl-sm"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && !hasStartedResponse && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 flex gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-gray-400 animate-bounce"
                  style={{
                    animationDelay: `${i * 0.15}s`,
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Error */}
        {error && <p className="text-xs text-red-500 px-1">{error}</p>}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <ChatbotInput onSend={handleSend} disabled={isTyping} />
    </div>
  );
};

export default ChatCard;
