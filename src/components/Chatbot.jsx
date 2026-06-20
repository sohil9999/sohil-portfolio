import { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import { askGemini } from "../gemini";
function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hi! Ask me about Sohil's skills, projects or experience.",
    },
  ]);

  const handleSend = async () => {
  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: userMessage,
    },
  ]);

  setInput("");

  try {
    const reply = await askGemini(userMessage);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: reply,
      },
    ]);
  } catch (error) {
    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: "Sorry, something went wrong.",
      },
    ]);
  }
};
  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
          fixed
          bottom-6
          right-6
          w-16
          h-16
          rounded-full
          bg-gradient-to-r
          from-cyan-400
          to-blue-500
          text-black
          shadow-[0_0_30px_rgba(34,211,238,0.5)]
          flex
          items-center
          justify-center
          text-2xl
          z-50
          hover:scale-110
          transition-all
          "
        >
          <FaRobot />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className="
          fixed
          bottom-6
          right-6
          w-[350px]
          h-[500px]
          bg-[#0B1120]
          border
          border-cyan-500/20
          rounded-3xl
          flex
          flex-col
          overflow-hidden
          z-50
          shadow-[0_0_40px_rgba(34,211,238,0.3)]
          "
        >
          {/* Header */}
          <div
            className="
            flex
            items-center
            justify-between
            px-4
            py-4
            border-b
            border-cyan-500/20
            "
          >
            <h3 className="text-cyan-400 font-bold">
              🤖 Ask Sohil AI
            </h3>

            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-3 ${
                  msg.sender === "user"
                    ? "text-right"
                    : "text-left"
                }`}
              >
                <p
                  className={`inline-block p-3 rounded-2xl max-w-[80%] ${
                    msg.sender === "user"
                      ? "bg-cyan-500 text-black"
                      : "bg-gray-800 text-white"
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-cyan-500/20 flex gap-2">
            <input
              type="text"
              placeholder="Ask about Sohil..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) =>
                e.key === "Enter" && handleSend()
              }
              className="
              flex-1
              bg-black
              text-white
              p-3
              rounded-xl
              outline-none
              "
            />

            <button
              onClick={handleSend}
              className="
              bg-cyan-500
              text-black
              px-4
              rounded-xl
              font-semibold
              "
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;