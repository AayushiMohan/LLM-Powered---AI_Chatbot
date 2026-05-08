import { useState, useRef, useEffect } from "react";
import "./App.css";

const API_URL = "http://localhost:5000/api/chat";

function TypingIndicator() {
  return (
    <div className="message assistant">
      <div className="avatar">S</div>
      <div className="bubble typing">
        <span></span><span></span><span></span>
      </div>
    </div>
  );
}

function Message({ msg }) {
  return (
    <div className={`message ${msg.role}`}>
      {msg.role === "assistant" && <div className="avatar">S</div>}
      <div className="bubble">
        {msg.content.split("\n").map((line, i) => (
          <span key={i}>{line}{i < msg.content.split("\n").length - 1 && <br />}</span>
        ))}
      </div>
      {msg.role === "user" && <div className="avatar user-avatar">U</div>}
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! I'm Shiva 👋 Your AI assistant. Ask me anything — code, concepts, career advice, or just chat!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `⚠️ Error: ${data.error}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Could not connect to server. Make sure the backend is running on port 5000.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        role: "assistant",
        content: "Chat cleared! Start fresh — ask me anything 🚀",
      },
    ]);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <div className="logo">S</div>
          <div>
            <h1>Shiva</h1>
            <span className="status">● Online</span>
          </div>
        </div>
        <button className="clear-btn" onClick={clearChat}>
          Clear Chat
        </button>
      </header>

      <main className="chat-area">
      {messages.map((msg, i) => (
      <Message key={i} msg={msg} />
      ))}
      {loading && <TypingIndicator />}
      <div ref={bottomRef} />
    </main>

      <footer className="input-area">
        <textarea
  className="input"
  placeholder="Message Shiva... (Enter to send, Shift+Enter for new line)"
  value={input}
  onChange={(e) => setInput(e.target.value)}
  onKeyDown={handleKey}
  rows={1}
/>
        <button
          className={`send-btn ${loading ? "disabled" : ""}`}
          onClick={sendMessage}
          disabled={loading}
        >
          {loading ? "..." : "➤"}
        </button>
      </footer>
    </div>
  );
}