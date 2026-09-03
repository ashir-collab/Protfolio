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
        className="bg-white flex items-center justify-center rounded-full shadow-lg p-4 w-14 h-14 fixed bottom-4 right-4 z-50 cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <IoChatboxEllipses size={30} color="black" />
      </div>
    </>
  );
};

export default ChatBot;
