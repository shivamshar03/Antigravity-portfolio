import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, User, ChevronDown } from 'lucide-react';
import { ChatGroq } from "@langchain/groq";
import { SystemMessage, HumanMessage, AIMessage } from "@langchain/core/messages";
import { portfolioContext } from '../data/portfolioContext';
import './FloatingChatbot.css';

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: "Hi! I'm Shivam's AI Assistant. How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  
  // Note: For a public production app, API keys should be heavily restricted or piped through a backend.
  // We use VITE_GROQ_API_KEY from env variables. If missing, we fallback to a notice.
  const apiKey = import.meta.env.VITE_GROQ_API_KEY || '';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim()) return;

    if (!apiKey) {
      setMessages([
        ...messages,
        { role: 'user', content: inputValue },
        { role: 'ai', content: "API Key missing. Please provide VITE_GROQ_API_KEY in your local .env file to enable AI responses." }
      ]);
      setInputValue('');
      return;
    }

    const currentInput = inputValue;
    setMessages(prev => [...prev, { role: 'user', content: currentInput }]);
    setInputValue('');
    setIsLoading(true);

    try {
      const chat = new ChatGroq({
        apiKey: apiKey,
        modelName: "llama3-8b-8192",
        temperature: 0.5,
      });

      // Build chain history
      const langchainMessages = [
        new SystemMessage(portfolioContext),
        ...messages.map(m => m.role === 'ai' ? new AIMessage(m.content) : new HumanMessage(m.content)),
        new HumanMessage(currentInput)
      ];

      const response = await chat.invoke(langchainMessages);

      setMessages(prev => [...prev, { role: 'ai', content: response.content }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I encountered an error connecting to my core servers." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="floating-chatbot-wrapper">
      <div className={`chatbot-window glass-panel ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <div className="chatbot-header-info">
            <Bot size={20} className="chatbot-header-icon" />
            <span>Shivam's AI Agent</span>
          </div>
          <button className="chat-close-btn" onClick={() => setIsOpen(false)}>
            <ChevronDown size={22} />
          </button>
        </div>
        
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-bubble-container ${msg.role === 'user' ? 'user' : 'ai'}`}>
              <div className={`chat-bubble ${msg.role === 'user' ? 'user-bubble' : 'ai-bubble'}`}>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="chat-bubble-container ai">
              <div className="chat-bubble ai-bubble typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form className="chatbot-input-area" onSubmit={handleSendMessage}>
          <input 
            type="text" 
            placeholder="Ask me anything..." 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button type="submit" className="chat-send-btn text-gradient" disabled={isLoading || !inputValue.trim()}>
            <Send size={18} />
          </button>
        </form>
      </div>

      <button className="chatbot-fab" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Bot size={26} />}
      </button>
    </div>
  );
};

export default FloatingChatbot;
