import { FiMoreHorizontal } from "react-icons/fi";

const ChatHeader = () => {
  return (
    <header className="flex h-20 items-center justify-between border-b border-zinc-200 px-6">
      <div>
        <h2 className="text-xl font-semibold">New Chat</h2>

        <p className="text-sm text-zinc-500">
          Ask anything about your uploaded documents.
        </p>
      </div>

      <button className="rounded-xl p-2 transition hover:bg-zinc-100">
        <FiMoreHorizontal size={22} />
      </button>
    </header>
  );
};

export default ChatHeader;
