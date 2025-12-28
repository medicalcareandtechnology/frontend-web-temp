const ChatbotButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Open chatbot"
      className="fixed bottom-8 right-8 z-40 group"
    >
      <div className="relative flex items-center gap-3 px-5 py-3 bg-black border border-blue-500/30 hover:border-blue-500 transition-all duration-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 text-blue-400"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span className="text-white text-xs font-light tracking-[0.2em] uppercase">Chat</span>
      </div>
    </button>
  );
};

export default ChatbotButton;
