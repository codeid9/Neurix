import { FiMessageSquare, FiPlus } from "react-icons/fi";

const chats = [
  "Research Paper",
  "Company Policy",
  "Meeting Notes",
  "Resume Review",
];

const ChatSidebar = () => {
  return (
    <aside className="flex h-full flex-col p-5">
      <button className="mb-6 flex items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-medium text-white">
        <FiPlus />
        New Chat
      </button>

      <h3 className="mb-4 text-sm font-semibold tracking-wider text-zinc-500 uppercase">
        Recent Chats
      </h3>

      <div className="space-y-2">
        {chats.map((chat) => (
          <button
            key={chat}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition hover:bg-zinc-100"
          >
            <FiMessageSquare />
            <span className="truncate">{chat}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default ChatSidebar;
