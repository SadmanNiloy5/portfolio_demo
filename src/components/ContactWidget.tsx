import { FaWhatsapp, FaEnvelope } from "react-icons/fa6";
import "./styles/ContactWidget.css";

const ContactWidget = () => {
  return (
    <div className="contact-widget">
      <a 
        href="mailto:sadmanniloy5@gmail.com" 
        className="cw-email"
        aria-label="Email me"
        data-cursor="disable"
      >
        <FaEnvelope />
      </a>
      <a 
        href="https://wa.me/8801906318139" 
        className="cw-whatsapp"
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        data-cursor="disable"
      >
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default ContactWidget;
