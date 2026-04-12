import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageSquare } from 'lucide-react';
import { sendChatMessage, getContactInfo } from '../services/chatbotService';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Welcome to the world of MCT. I'm your Virtual Assistant, ready to guide you on a journey of excellence and innovation. How can I assist you today? Feel free to ask a question or select from topics below.",
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
      setTimeout(() => inputRef.current.focus(), 600);
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
        content: `I apologize, but I encountered a technical difficulty. Please reach out to our support team at ${contactInfo.email} for direct assistance.`,
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

  const suggestions = [
    'How does Ease Band work?',
    'Key features',
    'Battery life',
    'Daily usage',
    'Shipping info',
    'Warranty details'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - Dimmed background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-[2px] z-[60]"
          />

          {/* Panel - Slides from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-lg bg-[#1A1A1A] text-white z-[70] flex flex-col shadow-2xl"
          >
            {/* Header - Lamborghini Style */}
            <div className="flex items-center justify-between p-10 bg-[#222222] border-b border-white/5">
              <h2 className="text-3xl font-bold tracking-tight uppercase font-sans">Ask Me</h2>
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center border border-white/40 hover:border-white transition-colors"
                aria-label="Close"
              >
                <X size={24} className="text-white" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-10 space-y-10 no-scrollbar">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[90%]`}>
                    <div
                      className={`px-8 py-10 rounded-[2rem] ${
                        message.role === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-[#2A2A2A] text-gray-100 shadow-xl'
                      }`}
                    >
                      <p className="text-lg leading-relaxed font-light">{message.content}</p>
                      
                      {/* Sub-notice Style for Assistant (like the "INFORMATION NOTICE" in screenshot) */}
                      {message.role === 'assistant' && index === 0 && (
                        <div className="mt-6 flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer group">
                           <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white">Information Notice</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Suggestions Section - Styled like screenshot "proposed topics" */}
              {showSuggestions && !isLoading && (
                <div className="space-y-6">
                  <p className="text-lg text-gray-300 font-light">
                    You can ask me a question or choose from the proposed topics.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {suggestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleQuickQuestion(q)}
                        className="px-6 py-3 bg-[#333333] hover:bg-[#444444] rounded-full text-sm text-white/90 transition-all duration-300 flex items-center gap-3 border border-white/5"
                      >
                        <MessageSquare size={16} />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-1.5 p-4">
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area - Minimalist like screenshot */}
            <div className="p-10 bg-[#1A1A1A] border-t border-white/10">
              <form onSubmit={handleSendMessage} className="flex items-center gap-4 group">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask your question here"
                  className="w-full bg-transparent border-none py-4 text-xl font-light text-white placeholder:text-gray-500 focus:outline-none focus:ring-0 transition-all"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="p-2 text-gray-400 hover:text-white disabled:opacity-20 transition-all transform hover:translate-x-1"
                >
                  <Send size={28} strokeWidth={1.5} />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Chatbot;
