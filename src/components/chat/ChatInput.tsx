import { FiPaperclip, FiSend } from "react-icons/fi";

const ChatInput = () => {
  return (
    <div className="border-t border-zinc-200 bg-white p-5">
      <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 px-4 py-3">
        <button className="rounded-lg p-2 transition hover:bg-zinc-100">
          <FiPaperclip size={20} />
        </button>

        <input
          placeholder="Ask anything..."
          className="flex-1 bg-transparent outline-none"
        />

        <button className="rounded-xl bg-violet-600 p-3 text-white transition hover:bg-violet-700">
          <FiSend />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
