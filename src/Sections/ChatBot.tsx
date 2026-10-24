import { useState } from "react";
import { IoChatboxEllipses } from "react-icons/io5";
import ChatCard from "../chatBot Components/ChatCard";

const ChatBot = () => {
  const [inputToggle, setInputToggle] = useState(false);
  return (
    <>
      {inputToggle && <ChatCard onClose={() => setInputToggle(false)} />}

      <div
        onClick={() => setInputToggle(!inputToggle)}
        className="bg-zinc-100 hover:bg-zinc-200 text-white flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(37,99,235,0.45)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] border border-blue-400/40 p-4 w-14 h-14 fixed bottom-4 right-4 z-50 cursor-pointer hover:scale-110 transition-all duration-300"
      >
        <IoChatboxEllipses size={30} color="black" />
      </div>
    </>
  );
};

export default ChatBot;
