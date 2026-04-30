import { FaWhatsapp } from "react-icons/fa6";
import "./styles/ChatWidget.css";

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <a 
        href="https://wa.me/8801906318139" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        data-cursor="disable"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ChatWidget;
