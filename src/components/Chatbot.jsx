import { useState, useRef, useEffect } from 'react';
import { sendChatMessage, getContactInfo } from '../services/chatbotService';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your MCT assistant. I\'m here to help you learn about the Ease Band and how it can provide relief from menstrual cramps. How can I assist you today?',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputMessage.trim(),
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);
    setShowSuggestions(false);

    try {
      const apiMessages = [...messages, userMessage].map(({ role, content }) => ({
        role,
        content
      }));

      const response = await sendChatMessage(apiMessages);

      const assistantMessage = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setShowSuggestions(true);
    } catch (error) {
      const contactInfo = getContactInfo();
      const errorMessage = {
        role: 'assistant',
        content: `Sorry, I encountered an error. Please contact our support team at ${contactInfo.email} for assistance.`,
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMessage]);
      setShowSuggestions(false);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    inputRef.current?.focus();
  };

  const initialQuestions = [
    'How does Ease Band relieve period cramps?',
    'What are the key features?',
    'How long does the battery last?'
  ];

  const suggestedQuestions = [
    'Is it safe to use daily?',
    'How do I clean the Ease Band?',
    'What is the warranty?',
    'How much does it cost?',
    'Can I wear it while sleeping?',
    'Is it waterproof?'
  ];

  // Get random 3 suggested questions
  const getRandomSuggestions = () => {
    const shuffled = [...suggestedQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const [currentSuggestions, setCurrentSuggestions] = useState(getRandomSuggestions());

  useEffect(() => {
    if (showSuggestions && messages.length > 1) {
      setCurrentSuggestions(getRandomSuggestions());
    }
  }, [showSuggestions, messages.length]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
      <div className="w-full max-w-md h-[600px] bg-white border-2 border-blue-500 flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-blue-100 bg-gradient-to-r from-blue-50 to-white">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-500 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm2 14c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-gray-900 font-medium text-lg tracking-wide">Medical Assistant</h3>
              <span className="text-blue-600 text-xs font-medium tracking-wider uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse"></span>
                Available 24/7
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
          {messages.map((message, index) => (
            <div key={index}>
              <div
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`px-4 py-3 ${message.role === 'user'
                        ? 'bg-blue-500'
                        : 'bg-white border-2 border-blue-100'
                      }`}
                  >
                    <p className={`text-sm font-light leading-relaxed ${message.role === 'user' ? 'text-white' : 'text-gray-800'}`}>{message.content}</p>
                  </div>
                  <div className="text-xs text-gray-500 mt-1 px-1 font-light">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>

              {/* Show suggestions after assistant messages */}
              {message.role === 'assistant' && index === messages.length - 1 && showSuggestions && messages.length > 1 && (
                <div className="mt-3 space-y-2">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">You might also ask:</p>
                  {currentSuggestions.map((question, qIndex) => (
                    <button
                      key={qIndex}
                      onClick={() => handleQuickQuestion(question)}
                      className="w-full text-left px-3 py-2 text-xs text-gray-700 bg-white border border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-light rounded"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border-2 border-blue-100 px-4 py-3">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Initial Quick Questions */}
        {messages.length === 1 && (
          <div className="px-6 py-4 border-t-2 border-blue-100 bg-white">
            <p className="text-gray-600 text-xs uppercase tracking-wider mb-3 font-medium">Quick questions:</p>
            <div className="space-y-2">
              {initialQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 border-2 border-blue-200 hover:border-blue-500 hover:bg-blue-50 transition-all font-light"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-6 border-t-2 border-blue-100 bg-white">
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 bg-gray-50 border-2 border-blue-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors font-light text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              className="px-4 py-3 bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              disabled={!inputMessage.trim() || isLoading}
              aria-label="Send message"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
